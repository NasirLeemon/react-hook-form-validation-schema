import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState, useEffect } from 'react';


const schema = yup.object({
    fName: yup
    .string()
    .required('Name is Required'),
    email: yup
    .string()
    .email('Email Must be Valid')
    .required('Email is Required'),
    password: yup
    .string()
    .required('Password is Required')

})
.required()

export default function 
() {

    const [userData, setUserData] = useState({
        fName: '',
        email: '',
        password: ''

    })

    const {register,reset, handleSubmit, formState: {errors, isSubmitSuccessful} } = useForm({
        resolver : yupResolver(schema)
    })


    // const onsubmit = data => console.log(data)
    const onSubmit = (data) => {
        setUserData(data)

        console.log(userData);
        
    }

   
   useEffect(()=>{
if (isSubmitSuccessful) {
    reset({
        fName : '',
        email: '',
        password: ''
    })
}
   },[isSubmitSuccessful])

    
  return (
    <Container>
        <Form className='form' onSubmit={handleSubmit(onSubmit)}>


        <Form.Group className="mb-3" >
        
        <Form.Label htmlFor='fName'>Name:</Form.Label>
        <Form.Control 
        name='fName'
        id='fName'
        type="fName" 
        
        placeholder="Enter Name"
        {...register('fName')}
        isInvalid={errors?.fName}
         />
         <Form.Control.Feedback type='invalid'>
         <p>{errors.fName?.message}</p>
         </Form.Control.Feedback>
        
      </Form.Group>

      <Form.Group className="mb-3" >
        
        <Form.Label htmlFor='email'>Email address</Form.Label>
        <Form.Control 
        name='email'
        id='email'
        type="email" 
        isInvalid={errors?.email}
        {...register('email')}
         />
          <Form.Control.Feedback type='invalid'>
         <p>{errors.email?.message}</p>
         </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Control 
        type="password" 
        name='password'
        id='password'
        isInvalid={errors?.password}
       {...register('password')}
        placeholder="Password" />
        <Form.Control.Feedback type='invalid'>
        <p>{errors.password?.message}</p>
        </Form.Control.Feedback>
        
      </Form.Group>
      <Form.Group className="mb-3">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    {/* <Container>
        <p>Name: {data.fName}</p>
        <p>Email: {data.email}</p>
    </Container> */}
    </Container>
    )
}


