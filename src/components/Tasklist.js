import React from 'react'
import { Link } from 'react-router-dom'
import{
    ListGroup, 
    ListGroupItem,
    Button
} from 'reactstrap'
function Tasklist()  {
  return (
  <ListGroup className='mt-4'>
    <ListGroupItem className='d-flex'><strong>first task</strong>
    <div className='ml-auto'>
    <Link to='/edit/1' className='btn btn-warning mr-1'>Edit</Link>
    <Button color='danger'>Delete</Button>
    </div>
    </ListGroupItem>
    <ListGroupItem className='d-flex'><strong>first task</strong>
    <div className='ml-auto'>
    <Link to='/edit/1' className='btn btn-warning mr-1'>Edit</Link>
    <Button color='danger'>Delete</Button>
    </div>
    </ListGroupItem>
  </ListGroup>
  );
}

export default  Tasklist