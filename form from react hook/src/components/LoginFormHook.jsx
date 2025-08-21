import React from 'react'
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { loginSchema } from './loginValidation';

export const LoginFormHook = () => {
const {register, handleSubmit, formState: { errors }} = useForm({resolver: zodResolver(loginSchema)});

const onSubmit= (data) => {
  console.log("login data submitted:" , data);
}

  return (
    <div>
        <h2>Login Form using React Hook Form</h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div style={{ marginBottom: '12px' , border: '1px solid #ccc', padding: '10px'}}>
                <label >Email:</label>
                <input type="email" {...register("email", { required: "Email is required"})} />
                {errors.email && 
                    <p style={{ color: 'red' }}>{errors.email.message}</p>
                }
            </div>
            <div style={{ marginBottom: '12px' , border: '1px solid #ccc', padding: '10px'}}>
                <label htmlFor="password">Password:</label>
                <input type="password" {...register("password", { required: "Password is required"})} />
                {errors.password && 
                    <p style={{ color: 'red' }}>{errors.password.message}</p>
                }
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
