// dbConfig.jsx
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Access the environment variable using import.meta.env
const sql = neon(import.meta.env.VITE_NEON_DB_URL);

export const db = drizzle(sql, { schema });
