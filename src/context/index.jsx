import React ,{createContext, useContext, useState, useCallback} from "react";

import { db } from "../utils/dbConfig";

import { Users, Records } from "../utils/schema";

import { eq } from "drizzle-orm";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [records, setRecords] = useState([]);
}