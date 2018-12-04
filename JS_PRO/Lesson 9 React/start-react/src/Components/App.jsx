import React, {Component} from "react";
import StateLessComp from "./StateLessApp";

class App extends Component {
    constructor() {
        super();

        this.state = {
            list: [
                {id: 1, title: "11"},
                {id: 2, title: "22"},
                {id: 3, title: "33"},
                {id: 4, title: "44"}
            ]
        };

        //this.handlClick = this.handlClick.bind(this);
    }
    //handlClick () {
    // У стрелочной функции нет контекста!!!! поэтому this будет передан верный
        handlClick = () =>{
        this.setState({
            title: "New rgergerg"
        });
    }

    render() {
        return (
            <div>
                <StateLessComp title={this.state.title}/>
                <button onClick={this.handlClick}>button</button>
            </div>
        );
    }
}

export default App;