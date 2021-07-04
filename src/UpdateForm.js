import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.hideModal}>
                    <Form onSubmit={(e)=>this.props.updatedata(e)}>
                        <Form.Group>
                        <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' defaultValue={this.props.name} />
                            <Form.Label>url</Form.Label>
                            <Form.Control type="text" name='url' defaultValue={this.props.url} />  
                       


                        </Form.Group>
                          
                      
                        
                     
                        <Button variant="primary" type="submit" onClick={this.props.hideModal}>
                            Submit
                        </Button>
                    </Form>
              
                   
                </Modal>
            </div >
        )
    }
}

export default UpdateForm
