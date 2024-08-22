export default {
    dialect: "postgresql",
    schema: "./src/utils/schema.jsx",
    out: "./drizzle",

    dbCredentials: {
        url: 'postgresql://duo_linga_owner:3Zz8usHLSNmQ@ep-sweet-wildflower-a5nmoq6r.us-east-2.aws.neon.tech/cancer_ai?sslmode=require',
        connectionString: 'postgresql://duo_linga_owner:3Zz8usHLSNmQ@ep-sweet-wildflower-a5nmoq6r.us-east-2.aws.neon.tech/cancer_ai?sslmode=require'
    }
}