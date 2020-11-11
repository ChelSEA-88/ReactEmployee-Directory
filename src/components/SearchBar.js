// import React, { Component } from "react";



// class SearchBar extends Component {

//     state = {
//         employees: []
//     }



//     handleInputChange = event => {
//         console.log(event.target.value);
//         const input = event.target.value;
//         const inputList = this.state.employees.filter(item => {
//             let values = Object.values(item).join("").toLowerCase();

//             return values.indexOf(input.toLowerCase()) !== -1; 
//         });
//         this.setState({ filteredEmployees: inputList});

//     }

//     render() {
//         return (
//             <>
//             <form>
//                 <div className="searchbar">
//                     <input 
//                     name="searchTerm"
//                     className="form-control" 
//                     type="text" 
//                     placeholder="Type name here" 
//                     onChange={this.handleInputChange}
//                     />
//                 </div>
//             </form>
//             </>
//         )
//     }
// }



// export default SearchBar;