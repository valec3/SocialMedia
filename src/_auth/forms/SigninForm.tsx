import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { SigninValidation } from '@/lib/validation';
import Loader from '@/components/shared/Loader';
import { Link } from 'react-router-dom';

const SigninForm = () => {
    const form = useForm<z.infer<typeof SigninValidation>>({
        resolver: zodResolver(SigninValidation),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const isLoading = true;
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof SigninValidation>) {
        const User = await loginUserAccount(values);
        console.log(values);
    }
    return (
        <Form {...form}>
            <div></div>
            <form>
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
                                <FormMessage />
                            </FormControl>
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
                                <FormMessage />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};

export default SigninForm;
