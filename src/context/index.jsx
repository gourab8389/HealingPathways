import React ,{createContext, useContext, useState, useCallback} from "react";

import { db } from "../utils/dbConfig";

import { Users, Records } from "../utils/schema";

import { eq } from "drizzle-orm";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {



    const [users, setUsers] = useState([]);
    const [records, setRecords] = useState([]);

    const [currentUser, setCurrentUser] = useState(null);



    const fetchUsers = useCallback(async () => {
        try {
            const result = await db.select().from(Users).execute();
            setUsers(result);
        } catch (error) {
            console.error(
                "Error fetching users",
                error
            )
        }
    }, [setUsers]);



    const fetchUserByEmail = useCallback(async (email) => {
        try {
            const result = await db.select().from(Users).where(eq(Users.createdBy, email)).execute();

        if(result.length > 0) {
            setCurrentUser(result[0]);
        };

        } catch (error) {
            console.error("Error fetching user by email", error);
        }
    }, []);

    const createUser = useCallback(async (userData) => {
        try {
            const newUser = await db.insert(Users).values(userData).returning().execute();
            fetchUsers();
    
            setUsers((prevUsers) => [...prevUsers, newUser[0]]);
        } catch (error) {
            console.error("Error creating user", error);
            return null;
        }
    }, []);
    


    const fetchUserRecords = useCallback(async(userEmail)=>{
        try {
            const result = await db.select().from(Records).where(eq(Records.createdBy, userEmail)).execute();
            setRecords(result);
        } catch (error) {
            console.error("Error fetching user records", error);
        }
    },[])

    const createRecord = useCallback(async (recordData) => {
        try {
            const newRecord = await db.insert().into(Records).values(recordData).returning({id:Records.id}).execute();
            setRecords((prevRecords)=>[...prevRecords, newRecord[0]]);
            return newRecord[0];
        } catch (error) {
            console.error("Error creating record", error);
            return null;
        }
    }, []);


    const updateRecord = useCallback(async(recordData)=> {
        try {
            const {documentId,...dataToUpdate} = recordData;
            const updateRecords = await db.update(Records).set(dataToUpdate).where(eq(Records.id, documentId)).returning();

            setRecords((prevRecords)=>prevRecords.map((record)=>record.id === documentId ? updateRecords[0]: record));
        } catch (error) {
            console.error("Error updating record", error);
            return null;
        }
    },[])

    return (
        <StateContext.Provider value={{
            users,
            fetchUsers,
            createUser,
            fetchUserByEmail,
            currentUser,
            fetchUserRecords,
            records,
            createRecord,
            updateRecord
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)