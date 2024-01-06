import * as z from 'zod'

export const SignupValidation = z.object({
    name: z.string().min(3).max(10,{message: 'Name must be between 3 and 10 characters'}),
    username: z.string().min(3).max(10),
    email: z.string().email(),
    password: z.string().min(8,{message: "Password must be at least 8 characters"}).max(20),
})
export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(20),
})