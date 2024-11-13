import { defineConfig } from 'drizzle-orm';
import { users } from './configs/schema'; // Apne schema ko import karein

export default defineConfig({
  schema: [users], // Yahan apni schema define karein
  migrations: {
    directory: './migrations', // Migration files ka directory
  },
  db: {
    client: 'pg', // PostgreSQL client
    connectionString: process.env.DATABASE_URL, // `.env` se connection URL
  },
});
