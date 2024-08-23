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


}