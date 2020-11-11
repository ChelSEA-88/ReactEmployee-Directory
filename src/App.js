import React from "react";
// import API from "./utils/API";
import Jumbotron from "./components/jumbotron"
import Employees from "./components/Employees"
import Container from "./components/container";



//import all components to use

function App() {
  return (
    <>
    <Jumbotron/>
      <Container style={{ minHeight: "100vh" }}>
          <br />
            <h5>Current Employees</h5>
        <Employees/>
      </Container>
    </>
  )
}

export default App;

