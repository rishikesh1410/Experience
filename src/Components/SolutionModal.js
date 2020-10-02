import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';


export class SolutionModal extends Component {
    render() {
        return (
            <div>
                <Modal isOpen={this.props.isDescModalOpen} toggle={() => this.props.descModalToggle()}>
                    <ModalHeader toggle={() => this.props.descModalToggle()}>Your Solution</ModalHeader>
                    <ModalBody>
                        {this.props.solution}
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default SolutionModal
