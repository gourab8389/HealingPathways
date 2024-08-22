import {neon} from "@neondatabase/serverless";

import {drizzle} from "drizzle-orm/neon-http";

import * as schema from "./schema";

const sql = neon(
    "postgresql://duo_linga_owner:3Zz8usHLSNmQ@ep-sweet-wildflower-a5nmoq6r.us-east-2.aws.neon.tech/cancer_ai?sslmode=require"
);

export const db = drizzle(sql, {schema})