import { z } from 'zod'


// - **Email** is in a valid format.
// - **Password** is not empty.
// - **Name** is not empty.
// - **Phone Number** is valid.
// - **Date Of Birth** is 18+.

const emailRule = z.email("Enter a valid email").min(1, "Email is required")
const passwordRule = z.string().min(1, "Password is required")

const getMinimumDate = (years: number) => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - years);
    date.setHours(0, 0, 0, 0);
    return date;
}
const LoginSchema = z.object({
    email: emailRule,
    password: passwordRule,
});

const registerSchema = z.object({
    email: emailRule,
    password: passwordRule,
    name: z.string().min(1, "Name is required"),
    phoneNum: z.string().regex(/^[+]?[\d\s-()]{7,15}$/, "Enter a valid phone number"),
    DoB: z.coerce.date().min(1, "Birth date is required").max(getMinimumDate(18), "You must be at least 18 years old"),
})

export { LoginSchema, registerSchema} ;
