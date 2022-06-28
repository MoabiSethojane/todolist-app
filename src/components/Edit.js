import React from 'react'
import {
    Form, 
    FormGroup,
    Label, 
    Input,
    Button
} from 'reactstrap'
import {Link} from 'react-router-dom'
const Edit = () => {
  return (
    <Form>
    <FormGroup>
        <Label>Edit Task</Label>
        <Input type="text" placeholder='Enter task'></Input>
    </FormGroup>
    <Button type='submit'>Edit Task</Button>
    <Link to="/" className="btn btn-danger ml-2" >Cancel</Link>
   </Form>
  )
}

export default Edit