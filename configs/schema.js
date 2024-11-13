// schema.js
import { pgTable, serial, text, varchar } from 'drizzle-orm/pg';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
  email: varchar('email', { length: 50 }).notNull(),
});
