import { IconFileUpload } from "@tabler/icons-react";
import React from "react";
import RecordDetailsHeader from "./components/record-details-header";
import { useLocation } from "react-router-dom";




const SingleRecordDetails = () => {

    const {state} = useLocation();
    return (
        <div className="flex flex-wrap gap-[26px]">
            <button 
            type="button" 
            // onClick={handleOpenModal}
            className="mt-6 inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-[#13131a] dark:text-white dark:hover:bg-neutral-800"
            >
                <IconFileUpload/>
                Upload Reports
            </button>

            {/* fileUploadModal */}
            <RecordDetailsHeader recordName={state}/>
        </div>
    )
}

export default SingleRecordDetails;