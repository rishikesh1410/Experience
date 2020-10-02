import React, { Component } from 'react'
import ExpList from './ExpList';
import ExpModal from './ExpModal';
import SolutionModal from './SolutionModal';
import ExpHead from './ExpHead';
import ExpFetchService from '../Services/ExpFetch';

class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isModalOpen : false,
             isDescModalOpen : false,
             solution : "",
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
                    "link": "https://stackoverflow.com/questions/18162863/how-to-run-different-methods-parallely"
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
                    "link": "https://stackoverflow.com/questions/18162863/how-to-run-different-methods-parallely"
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
                    "link": "https://stackoverflow.com/questions/18162863/how-to-run-different-methods-parallely"
                },
                {
                    "id": "5f7716703ba211584e9a106a",
                    "user_id": 5,
                    "subject": "Log not resolved Error in Spring boot",
                    "description": "Sometimes Update project in STS will solve this Error",
                    "tags": [
                        "java",
                        "spring boot",
                        "spring",
                        "error"
                    ],
                    "link": null
                },
                {
                    "id": "5f7716ca3ba211584e9a106b",
                    "user_id": 5,
                    "subject": "Merge Conflict in git push",
                    "description": "Pull that branch code in local, resolve merge conflict manually and then push",
                    "tags": [
                        "merge conflict",
                        "git",
                        "bitbucket",
                        "github"
                    ],
                    "link": null
                },
                {
                    "id": "5f77170c3ba211584e9a106c",
                    "user_id": 5,
                    "subject": "Error like unrelated histories while git pull",
                    "description": "git pull origin main --allow-unrelated-histories   ",
                    "tags": [
                        "merge conflict",
                        "git",
                        "bitbucket",
                        "github"
                    ],
                    "link": null
                }
            ]
        }

        this.modalToggle = this.modalToggle.bind(this);
        this.descModalToggle = this.descModalToggle.bind(this);
    }

    componentDidMount() {
        console.log("did mount");
    }

    modalToggle() {
        this.setState({isModalOpen : !this.state.isModalOpen});
    }
    descModalToggle(sol = "") {
        this.setState({isDescModalOpen : !this.state.isDescModalOpen, solution : sol});
    }

    render() {
        return (
            <div className="row pl-5 pr-5">
                <ExpModal isModalOpen={this.state.isModalOpen} modalToggle={this.modalToggle} />
                <SolutionModal isDescModalOpen={this.state.isDescModalOpen} descModalToggle={this.descModalToggle} solution={this.state.solution} />
                <ExpHead modalToggle={this.modalToggle} />
                <ExpList descModalToggle={this.descModalToggle} exps={this.state.exps} />
            </div>
        )
    }
}

export default Main
