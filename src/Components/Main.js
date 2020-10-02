import React, { Component } from 'react'
import ExpList from './ExpList';
import ExpModal from './ExpModal';
import ExpHead from './ExpHead';
import ExpFetchService from '../Services/ExpFetch';

class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isModalOpen : true,
             exps:[
                {
                    "id": "5f76bb1a24da3c36525a78ce",
                    "user_id": 5,
                    "subject": "Java function calls in parallel",
                    "description": "Create callable object for every function and then executor",
                    "tags": [
                        "java",
                        "threading",
                        "parallelization",
                        "optimisation"
                    ],
                    "links": [
                        "https://stackoverflow.com/questions/18162863/how-to-run-different-methods-parallely"
                    ]
                },
                {
                    "id": "5f76e7ad3f24cc291715549d",
                    "user_id": 5,
                    "subject": "C++ function calls in parallel",
                    "description": "Create callable object for every function and then executor",
                    "tags": [
                        "c++",
                        "threading",
                        "parallelization",
                        "optimisation"
                    ],
                    "links": [
                        "https://stackoverflow.com/questions/18162863/how-to-run-different-methods-parallely"
                    ]
                },
                {
                    "id": "5f76e7ba3f24cc291715549e",
                    "user_id": 5,
                    "subject": "C function calls in parallel",
                    "description": "Create callable object for every function and then executor",
                    "tags": [
                        "c",
                        "threading",
                        "parallelization",
                        "optimisation"
                    ],
                    "links": [
                        "https://stackoverflow.com/questions/18162863/how-to-run-different-methods-parallely"
                    ]
                }
            ]
        }

        this.modalToggle = this.modalToggle.bind(this);
    }

    componentDidMount() {
        console.log("did mount");
    }

    modalToggle() {
        this.setState({isModalOpen : !this.state.isModalOpen});
    }

    render() {
        return (
            <div className="row pl-5 pr-5">
                <ExpModal isModalOpen={this.state.isModalOpen} modalToggle={this.modalToggle} />
                <ExpHead />
                <ExpList exps={this.state.exps} />
            </div>
        )
    }
}

export default Main
