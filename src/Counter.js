import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Login from './assets/loginimage.jpg'
import './site.css'
import { Grid, Grid2, Input } from "@mui/material";
import { Formik } from "formik";
import ResponsiveAppBar from './NavMenu'


class Counter extends Component {
    render(){
        return (
            <div> 
                <Grid2 style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img className="background-image" src={Login} alt="login" />
                <Grid style={{position: 'fixed', top: 0, width: '100%'}}>
                  <ResponsiveAppBar/>
                </Grid>
                <Grid style={{position: 'absolute'}} >
                <Grid className="login-main">

                <Formik
                 initialValues={{ email: '', password: '' }}
                 validate={values => {
                   const errors = {};
                   if (!values.email) {
                     errors.email = 'Required';
                   } else if (
                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                   ) {
                     errors.email = 'Invalid email address';
                   }
                   return errors;
                 }}
                 onSubmit={(values, { setSubmitting }) => {
                   setTimeout(() => {
                    //  alert(JSON.stringify(values, null, 2));
                     this.props.loginHandle(true)
                     setSubmitting(false);
                   }, 400);
                 }}
                >
{({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} className="login-input">
            <Grid className="login-form">
                <p style={{color: '#61dafb', fontSize: '20px', fontWeight: 900}}>Login</p>
           <Input
           className="input-style"
           style={{marginBottom: '10px'}}
             type="email"
             name="email"
             placeholder="Email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && 
             <p className="error-style"> Email Required </p>
           }
                            
             <Input 
className="input-style"
style={{marginBottom: '10px'}}
             type="password"
             name="password"
             placeholder="Password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <div  style={{display: 'flex', justifyContent: 'center'}}>
           <button className="submit-button" type="submit" >
             Submit
           </button>
           </div>
           </Grid>
         </form>
       )}
                </Formik>
                </Grid>
                </Grid>
                </Grid2>
            </div>
    )
    }
}

export default Counter;