// import React from 'react'

// export default function Contact() {
//     return (
//         <>

//         <h1>contact</h1>
//             <div classNameNameName='contact'>
//                 <form action="https://api.web3forms.com/submit" method="POST" className="left">
//                     <h1 className="main">Get in touch</h1>
//                     <input type="hidden" name="access_key" value="180112e0-2ead-4277-ac50-b1696d9a9e9d" />
//                     <input type="text" name="name" placeholder="Your name" classNameName="name" autoComplete='off' required/>
//                     <input type="email" name="email" placeholder="your email" className="email" autoComplete='off' required/>
//                     <textarea name="message" placeholder="Message" className="text"/>
//                     <button type="submit" className="submit">submit</button>
//                 </form>
//             </div>
//     </>
// )
// }


import { useFormik } from 'formik'
import { Schema } from './Schema';
import React from 'react'
import "./Contact.css"


const initialValues = {
    names: "",
    email: "",
    Mobile_number: "",
    feedback: ""
}
export default function Contact() {
    const { values, errors, touched, handleBlur, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: Schema,
        onSubmit: (values, action) => {
            console.log(values)
            values.resetForm();
        }
    })
    return (
        <>
            <div className='form'>
            <div className='form1'>
                <h1>Get in Touch</h1>
            </div>
                <div className='container'>
                    <div className='container_form'>
                        <h2>Contact Us</h2>
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="180112e0-2ead-4277-ac50-b1696d9a9e9d" />
                            <div className='box'>
                                <label className='name' htmlFor='names'>Name</label>
                                <input type='text' autoComplete='off' name='names' placeholder='Enter Your Name' onChange={handleChange} value={values.names} onBlur={handleBlur} required />
                                {errors.names && touched.names ? <p>{errors.names}</p> : null}
                            </div>
                            <div className='box'>
                                <label className='name' htmlFor='email'>E-mail</label>
                                <input type='email' autoComplete='off' name="email" placeholder='Enter Your E-mail' onChange={handleChange} value={values.email} onBlur={handleBlur} required/>
                                {errors.email && touched.email ? <p>{errors.email}</p> : null}
                            </div>
                            <div className='box'>
                                <label className='name' htmlFor='phone'>Mobile number</label>
                                <input type='tel' autoComplete='off' name="Mobile_number" placeholder='Enter Mobile number' onChange={handleChange} value={values.Mobile_number} onBlur={handleBlur} className='number' required />
                                {errors.Mobile_number && touched.Mobile_number ? <p>{errors.Mobile_number}</p> : null}
                            </div>
                            <div className='box'>
                                <label className='name' htmlFor='feedback'>Message</label>
                                <textarea autoComplete='off' name="feedback" placeholder='Typing...' onChange={handleChange} value={values.feedback} onBlur={handleBlur} className='feedback' required/>
                                {errors.feedback && touched.feedback ? <p>{errors.feedback}</p> : null}
                            </div>

                            <div className='box'>
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='container_form2'>
                        <img src='./photos/bike.jpeg' height="250px" width="200px" />
                    </div>
                </div>
            </div>
        </>
    )
}

