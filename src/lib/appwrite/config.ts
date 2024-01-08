import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwritConfig = {
    projectId: import.meta.env.VITE_APP_APPWRITE_PROJECT_ID,
}

export const client = new Client();
export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);