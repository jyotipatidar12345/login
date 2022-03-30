import e from "express";
import React, { useState } from "react";
// import EmpTable from './EmpTable';
import { Col, Button, Form, Row, Container } from 'react-bootstrap';
export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitData(){
    e.preventDefault();
    insertdataemp();
  }

  async function insertdataemp() {
    let data = { email, password };
    console.log(data);

    let output = await fetch(
      "http://localhost:5000/api/login",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }

    );
    output = await output.JSON();
    console.log(output);
  }

  return (
    <div >
      <div style={{ backgroundColor: "blueviolet" }}>Employee Register</div>
      <div className="mb-3" style={{ backgroundColor: 'black', color: 'red', margin: '60px 100px 100px 100px', padding: "10px 20px 10px 20px" }}>

        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ float: 'left' }}>Email address</Form.Label>
                  <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ float: 'left' }}>Password</Form.Label>
                  <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={submitData} variant="primary" type="submit" id="btn" >
                  Submit
                </Button>
              </Form>
            </Col>

          </Row>
        </Container>

        {/* <Container>
 
    <Form >
    <Form.Label >Email</Form.Label>
                <Form.Control type="text" placeholder="Enter employee id"
                   value = {email}
                       onChange={(e)=>setEmail(e.target.value)} />

       <Form.Label >Employee name</Form.Label>
                <Form.Control type="text" placeholder="Enter employee name"
                   value = {password}
                       onChange={(e)=>setPassword(e.target.value)} />


      <Button onClick={inserdataemp} variant="primary" type="submit" id ="btn" >
           Submit
      </Button>
     </Form>
    
    <EmpTable/>
 
</Container> */}
      </div>
    </div>

  )
}


