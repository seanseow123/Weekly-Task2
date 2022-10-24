import React, { Component } from "react";
import WebPage from "./WebPage";
import NavBar from "./NavBar";
import AddCard from "./AddCard";

class App extends Component {

    state = {
        formData: []
    }

    addPage = (props) => {
        console.log(props);
        this.setState(
            {
                formData: [...this.state.formData, props]
            }
        )
    }

    render() {
        return (
            <div style={{backgroundColor: '#F5F5DC'}}>
                <br></br><br></br>
                <NavBar />
                <hr></hr>
                <WebPage addPage={this.addPage} />
                <hr></hr>
                <AddCard formData={this.state.formData} />
            </div>
        )
    }
}

export default App;
