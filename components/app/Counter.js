import { Component } from "react";

class Counter extends Component {
    constructor (props) {
        super (props)
        this.state = {
            counter: 0,
        }
    };

    btnAdd = () => {
        this.setState( i => ({
            counter: i.counter +1
        }))
    };

    btnRemove = () => {
        this.setState( i => ({
            counter: i.counter -1
        }))
    };

    btnRestart = () => {
        this.setState( i => ({
            counter: 0
        }))
    }

    render() {
        return(
            <div className="p-5">
                <p className="text-danger h1 text-center my-3">{this.state.counter}</p>
                <button onClick={this.btnAdd} className="btn btn-success mx-2">Add</button>
                <button onClick={this.btnRemove} className="btn btn-danger mx-2">Remove</button>
                <button onClick={this.btnRestart} className="btn btn-info mx-2">Restart</button>
            </div>
        )
    }
}

export default Counter;
