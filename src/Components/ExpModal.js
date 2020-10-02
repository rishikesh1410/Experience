import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input} from 'reactstrap';

class ExpModal extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Modal isOpen={this.props.isModalOpen} toggle={this.props.modalToggle}>
                    <ModalHeader toggle={this.props.modalToggle}>Add your Experience</ModalHeader>
                    <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="subject">Subject</Label>
                            <Input type="text" name="subject" id="subject" placeholder="Enter a subject" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="textarea" name="description" id="description" placeholder="Enter a Detailed Solution"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="tags">Select Tags</Label>
                            <Input type="select" name="tags" id="tags" multiple>
                            <option>C++</option>
                            <option>Java</option>
                            <option>Python</option>
                            <option>Kotlin</option>
                            <option>Optimisation</option>
                            <option>Parallelization</option>
                            <option>Coding Styles</option>
                            <option>General</option>
                            <option>Web</option>
                            <option>Machine learning</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="link">Link</Label>
                            <Input type="text" name="link" id="link" placeholder="Enter a Link" />
                        </FormGroup>
                        <Button>Add</Button>
                    </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ExpModal
