import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap';

function Page() {
    const w = 500;
  return (
   <div>
    <h1 style={{color:'red',backgroundColor:'orange',width:`${w}px`}}>heading one</h1>
    <h1>custom html, css design</h1>
    <section className='c-page'>
        <h1>this is custom css </h1>
    </section>
    <h1>use of bootstrap design</h1>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <p className='h1 bg-danger text-white p-5'>This is heading</p>
                    <button className='btn btn-danger'>submit button</button>
                </div>
            </div>
        </div>
    <h1>use react bootstrap design</h1>
        <Container>
            <Row>
                <Col bg="primary" xs={12}>
                <h5 className='text-info'>this is column</h5>
                </Col>
                <Col>
                <Button variant="primary">Primary</Button>
                </Col>
            </Row>
        </Container>
   </div>
  )
}

export default Page