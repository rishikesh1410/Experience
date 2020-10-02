import React, { Component } from 'react'

export class ExpHead extends Component {
    render() {
        return (
            <div className="col-md-12 row mt-5">
                <h1 className="col-md-5 text-justify ml-5">Experience</h1>
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Search by Subject" />
                </div>
                <div className="col-md-2">
                    <button onClick={this.props.modalToggle} type="button" className="btn btn-secondary" data-toggle="modal" data-target="#addExp">Add Experience</button>
                </div>
               
            </div>
        )
    }
}

export default ExpHead
