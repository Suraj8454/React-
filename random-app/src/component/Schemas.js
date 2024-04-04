import * as yup from 'yup';

export const signUpSchema=yup.object({
    names:yup.string().min(2).max(35).required("Please enter your name*"),
    email:yup.string().email().required("please enter your correct email*"),
    // password:yup.string().min(8).max(30).required("Atleast 8 character*"),
    // confirm_password:yup.string().required().oneOf([yup.ref('password'),null],"Worng password*"),
    Mobile_number:yup.number().min(12).max(10).required("Enter mobile number*"),
    feedback:yup.string().min(2).max(200).required(" Your Feedback*")
})