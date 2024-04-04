import { useFormik } from 'formik'
import { signUpSchema } from './Schemas';

import React from 'react'
import Footer from './Footer';
const initialValues = {
  names: "",
  email: "",
  // password: "",
  // confirm_password: "",
  Mobile_number: "",
  feedback: ""
}
export default function Contact() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values)
      action.resetForm();

    }
  })
  // console.log(formikk)
  return (
    <>
      <div className='body'>
        <div className='form'>
          <div className='container_form'>
            <form onSubmit={handleSubmit}>
              <h2>Contact Us</h2>
              <div className='box'>
                <label className='name' htmlFor='names'>Name</label>
                <input type='text' autoComplete='off' name='names' placeholder='Enter Your Name' onChange={handleChange} value={values.names} onBlur={handleBlur} />
                {errors.names && touched.names ? <p>{errors.names}</p> : null}
              </div>
              <div className='box'>
                <label className='name' htmlFor='email'>E-mail</label>
                <input type='email' autoComplete='off' name="email" placeholder='Enter Your E-mail' onChange={handleChange} value={values.email} onBlur={handleBlur} />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
              </div>
              {/* <div className='box'>
            <label htmlFor='password'>Password</label>
            <input type='password' autoComplete='off' name='password' placeholder='Enter Your Password' onChange={handleChange} value={values.password} onBlur={handleBlur} />
            {errors.password && touched.password ? <p>{errors.password}</p> : null}
            </div>
            <div className='box'>
            <label htmlFor='confirm_password'>Confirm Password</label>
            <input type='password' autoComplete='off' name="confirm_password" placeholder='Enter Your Confirm_Password' onChange={handleChange} value={values.confirm_password} onBlur={handleBlur} />
            {errors.confirm_password && touched.confirm_password ? <p>{errors.confirm_password}</p> : null}
            </div> */}
              <div className='box'>
                <label className='name' htmlFor='phone'>Mobile number</label>
                <input type='tel' autoComplete='off' name="Mobile_number" placeholder='Enter Your Mobile number' onChange={handleChange} value={values.Mobile_number} onBlur={handleBlur} className='number' />
                {errors.Mobile_number && touched.Mobile_number ? <p>{errors.Mobile_number}</p> : null}
              </div>
              <div className='box'>
                <label className='name' htmlFor='feedback'>Feedback</label>
                <textarea autoComplete='off' name="feedback" placeholder='Typing...' onChange={handleChange} value={values.feedback} onBlur={handleBlur} className='feedback' />
                {errors.feedback && touched.feedback ? <p>{errors.feedback}</p> : null}
              </div>

              <div className='box'>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  )
}
