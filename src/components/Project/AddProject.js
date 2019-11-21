import React, { Component } from 'react';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            projectName: "",
            projectIdentifier: "",
            startDate: "",
            endDate: "",
            description: "",
        };
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    }

    onSubmit = () => {
        const newProjectObject = {
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            description: this.state.description,
        };
        console.log(newProjectObject);
    }

    render() {
        return (
            <div className="register" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create / Edit Project form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg " placeholder="Project Name" name="projectName"
                                        value={this.state.projectName} onChange={this.handleChange('projectName')}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID"
                                        nane="projectIdentifier" value={this.state.projectIdentifier} onChange={this.handleChange('projectIdentifier')}
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Project Description" name="projectDescription"
                                        value={this.state.description} onChange={this.handleChange('description')}
                                    ></textarea>
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="startDate" value={this.state.startDate} onChange={this.handleChange('startDate')} />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="endDate" value={this.state.endDate} onChange={this.handleChange('endDate')} />
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default AddProject;