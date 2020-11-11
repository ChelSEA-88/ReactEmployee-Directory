import React, { Component } from "react";

import API from "../utils/API.js";
// import { Table } from 'reactstrap';



class Employees extends Component {

    state = {
        employees: [],
        filteredEmployees: [],
        search: ""
    };

    componentDidMount() {
        API.getResults(this.state.search).then(response => {
            console.log(response.data.results);
            this.setState({
                employees: response.data.results,
                filteredEmployees: response.data.results
            })
        })
    }


    handleInputChange = event => {
        console.log(event.target.value);
        const input = event.target.value;
        const inputList = this.state.employees.filter(item => {
            let values = Object.values(item).join("").toLowerCase();

            return values.indexOf(input.toLowerCase()) !== -1; 
        });
        this.setState({ filteredEmployees: inputList});

    }

    render() {
        return (
            <>
                <form>
                    <div className="searchbar">
                        <input 
                        name="searchTerm"
                        className="form-control" 
                        type="text" 
                        placeholder="Type name here" 
                        onChange={this.handleInputChange}
                        />
                    </div>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        </tr>
                    </thead>
                        <tbody>
                            {this.state.filteredEmployees.map(employee => (
                                <tr key={employee.login.uuid}>
                                    <img alt={employee.name.first + " " + employee.name.last} src={employee.picture.thumbnail}></img>
                                    <td>{employee.name.first + " " + employee.name.last}</td>
                                    <td>{employee.cell}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.dob.age}</td>
                                </tr>
                            ))}
                        </tbody>
                </table>
            </>
        )
    }
}



export default Employees;