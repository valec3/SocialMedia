import { NewUser } from '@/types';
import { account } from './config';
import { ID } from 'appwrite';
export async function createUserAccount(user: NewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
        );
        return newAccount;
    } catch (error) {
        console.error(error);
        return null;
    }
}
