
import { useFormik } from 'formik';
import './App.css';
import { signUpSchema } from './schemas';

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function App() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values)
      action.resetForm();
    }
  })
  //  console.log(formik)

  return (
    <>
      <div>
        <h4>Form</h4>
        <form onSubmit={handleSubmit}>
          <lable htmlFor="name">Name</lable>
          <input type="text" autoComplete="off" placeholder="Enter name" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
          {errors.name && touched.name ? <p>{errors.name}</p> : null}
          <lable htmlFor="email">Email</lable>
          <input type="email" autoComplete="off" placeholder="Enter email" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
          <lable htmlFor="password">password</lable>
          <input type="password" autoComplete="off" placeholder="Enter password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
          {errors.password && touched.password ? <p>{errors.password}</p> : null}
          <lable htmlFor="confirm_password">confirm_password</lable>
          <input type="password" autoComplete="off" placeholder="Enter confirm password" name="confirm_password" id="confirm_password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />
          {errors.confirm_password && touched.confirm_password ? <p>{errors.confirm_password}</p> : null}
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default App;


