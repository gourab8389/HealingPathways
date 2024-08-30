import { IconCirclePlus } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import RecordCard from "./components/record-card";
import CreateRecordModal from "./components/create-record-modal";
import { useNavigate } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";
import { useStateContext } from "../../context";

const Index = () => {

    const navigate = useNavigate();

    const {user} = usePrivy();

    const {records, fetchUserRecords, createRecord, fetchUserByEmail, currentUser} = useStateContext();

    const [userRecords, setUserRecords] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
      
        if(user){
            fetchUserByEmail(user.email.address)
            fetchUserRecords(user.email.address)
        }
    }, [user, fetchUserByEmail, fetchUserRecords]);
    
    useEffect(()=>{
        setUserRecords(records)
        localStorage.setItem("userRecords", JSON.stringify(records))
    },[records]);

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    const createFolder = async (foldername) => {
        try {
            if(currentUser){
                const newRecord = await createRecord({
                    userId: currentUser.id,
                    recorderName: foldername,
                    analysisResults: '',
                    kanbanRecords: '',
                    createdBy: user.email.address,
                });
                if(newRecord){
                    fetchUserRecords(user.email.address);
                    handleCloseModal();
                }
            }
        } catch (error) {
            console.log(error);
            handleCloseModal();
        }
    }

    const handleNavigate = (name) => {
        const filteredRecords = userRecords.filter((record)=> record.recordName === name);

        navigate(`/medical-records/${name}`, {state: filteredRecords[0]})
    }

    return (
        <div className="flex flex-wrap gap-[26px]">

            <button
            type="button"
            className="mt-6 inline-flex items-center gap-x-2 rounded-full border border-neutral-700 bg-[#13131a] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
            onClick={handleOpenModal}
            
            >
                <IconCirclePlus/>
                Create Record
            </button>


            <CreateRecordModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onCreate={createFolder}
            />

            <div className="grid w-full sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                {
                    userRecords?.map((record)=>(            
                        <RecordCard 
                        record={record}
                        onNavigate={handleNavigate}
                        key={record.recordName}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default Index;