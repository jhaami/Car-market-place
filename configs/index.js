

import { drizzle } from 'drizzle-orm/node-postgres';
export const db = drizzle(import.meta.env.VITE_DRIZZLE_DATABASE_URL);
