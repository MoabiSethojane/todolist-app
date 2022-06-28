import React from 'react'
import {
    Form, 
    FormGroup,
    Label, 
    Input,
    Button
} from 'reactstrap'
import {Link} from 'react-router-dom'
const Add = () => {
  return (
   <Form>
    <FormGroup>
        <Label>Add Task</Label>
        <Input type="text" placeholder='Enter task'></Input>
    </FormGroup>
    <Button type='submit'>Submit</Button>
    <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
   </Form>
  )
}

export default Add