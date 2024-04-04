import * as yup from "yup";
// import { yupToFormErrors } from "formik";

export const signUpSchema = yup.object({
    name:yup.string().min(2).max(30).required("Please enter your name"),
    email:yup.string().email().required("Please enter your email"),
    password:yup.string().min(8).required("Please enter your password"),
    confirm_password:yup.string().required().oneOf([yup.ref('password'),null],"not maching")
})