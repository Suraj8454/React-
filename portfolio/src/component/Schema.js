import * as yup from 'yup';

export const Schema=yup.object({
    names:yup.string().min(2).max(35).required("Please enter your name*"),
    email:yup.string().email().required("please enter your correct email*"),
    Mobile_number:yup.number().min(10).max(10).required("Enter mobile number*"),
    feedback:yup.string().min(2).max(200).required(" Your Feedback*")
})