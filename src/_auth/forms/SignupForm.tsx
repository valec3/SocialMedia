import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { SignupValidation } from '@/lib/validation';
import Loader from '@/components/shared/Loader';
import { Link } from 'react-router-dom';
import { createUserAccount } from '@/lib/appwrite/api';
const SignupForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: '',
        },
    });
    const isLoading = false;
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof SignupValidation>) {
        const newUser = await createUserAccount(values);
        console.log(newUser);
    }
    return (
        <Form {...form}>
            <div className="sm:w-420 flex flex-center-center flex-col">
                <img src="/assets/images/logo.svg" alt="logo" />
                <h2 className="h3-bold md:h2-bold pt-5 sm:pt-10">
                    Create a new account
                </h2>
                <p className="text-light-3 small-medium md:based-regular">
                    To use our App enter your account details
                </p>

                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 flex flex-col gap-1 w-full"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        className="shad-input"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        className="shad-input"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        className="shad-input"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        className="shad-input"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="shad-button_primary">
                        {isLoading ? (
                            <div className="flex-center gap-6 flex">
                                <Loader /> Loading ...
                            </div>
                        ) : (
                            'Sign up'
                        )}
                    </Button>
                    <p className="text-small-regular text-light-2 text-center mt-2">
                        ¿Ya tienes una cuenta?{' '}
                        <Link to="/login" className="text-primary">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </Form>
    );
};

export default SignupForm;
