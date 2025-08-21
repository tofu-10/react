import { z } from "zod";
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" }).
    endsWith("2", {
      message: "password should end with '2'",
}),

  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be atleast 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" })
    .endsWith("2", {
      message: "password should end with '2'",
    }),
});