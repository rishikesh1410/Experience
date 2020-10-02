import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {Badge} from 'reactstrap';

export class ExpList extends Component {
    
    render() {
        return (
            <div className="col-md-12 pl-5 pr-5 pt-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th onClick={this.props.sortTask}>S.No</th>
                            <th>Subject</th>
                            <th>Tags</th>
                            <th>Your Solution</th>
                            <th>Solution Link</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.exps.map((exp,i) =>
                                <tr key={exp.id}>
                                    <td>{i+1}</td>
                                    <td>{exp.subject}</td>
                                    <td>{exp.tags.map(tag => <span style={{fontSize:"20px"}}><Badge color="secondary" className="ml-2">{tag}</Badge></span>)}</td>
                                    <td className="text-success"  onClick={() => this.props.descModalToggle(exp.description)}> <FontAwesomeIcon icon={faCoffee} /></td>
                                    <td><a href={exp.link} target="__blank">{ (exp.link == null) ? "No Solution" : "Solution" }</a></td>
                                    <td className="text-success"><FontAwesomeIcon icon={faEdit} /></td>
                                    <td className="text-danger"><FontAwesomeIcon icon={faTrashAlt} /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExpList
