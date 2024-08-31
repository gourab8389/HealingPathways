export default {
    dialect: "postgresql",
    schema: "./src/utils/schema.jsx",
    out: "./drizzle",

    dbCredentials: {
        url: process.env.NEON_DB_URL,
        connectionString: process.env.NEON_DB_URL
    }
}
