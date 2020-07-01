import React,{Component} from 'react';
import HeaderLogin from '../../../../HeaderLogin';
import NavbarLogin from '../../../../Navbar';
import { Form, Col ,Button,Table,Card} from "react-bootstrap";
import './CowStyle.css';
class Header extends Component{
  render(){
      return(
        <div className="container-fluid">
        <div className="row ">
          <HeaderLogin />
        </div>
        <div className="row Nav-shadow">
          <NavbarLogin />
        </div>
        <div className="row mar"><div className="container box-border">
        <Card.Title>บันทึกการคลอดลูก</Card.Title>
        
      
        <Form className="pad"> 
  <Form.Row>
    <Col>
      <Form.Control placeholder="โรงเรือน" />
    </Col>
    <Col>
      <Form.Control placeholder="คอก" />
    </Col>
    <Col>
      <Form.Control placeholder="ฝูง" />
    </Col>
    <Col>
      <Form.Control placeholder="หมายเลข" />
    </Col>

  </Form.Row>
</Form>
     
       <Table striped bordered hover>
          
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  
  </tbody>
</Table>
          
          
          </div>
          </div>
        <div className="row mar" ><div className="container box-border">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" value="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        </div>
      </div>
      )
  }
}
export default Header;
