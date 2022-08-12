import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function 
() {

    // const [userData, setUserData] = useState({
    //     fName: '',
    //     email: '',
    //     password: '',
    // })

    // const handleChange = (evt) => {
    //     setUserData({
    //         ...userData,
    //         [evt.target.name] : evt.target.value
    //     })
    // }

    // const handleSubmit = (evt) => {
    //     evt.preventDefault()
    //     console.log(userData);
    // }

    const schema = yup.object({
        fName: yup
        .string()
        .required('Name is Required')
    })
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver : yupResolver(schema)
    })

    const onsubmit = data => console.log(data)

    // const {fName, email, password} = userData
  return (
    <Container>
        <Form className='form' onSubmit={handleSubmit(onsubmit)}>


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
        {...register('email')}
         />
         <p>{errors.email?.message}</p>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Control 
        type="password" 
        name='password'
        id='password'
       {...register('password')}
        placeholder="Password" />
        <p>{errors.password?.message}</p>
      </Form.Group>
      <Form.Group className="mb-3">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    )
}


