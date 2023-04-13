import React from 'react';
import { Component } from 'react';
import KinolarSoni from "./components/kinolar-soni/kinolar-soni"; 
import QidirPanel from "./components/qidirish-panili/qidirish-panili";
import Klist from "./components/kinolar-list/kinolar-list";
import KinoQoshish from "./components/kino-qoshish/kino-qoshish";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Qasoskorlar", seen: '12135', colorY: 'true', id: 1},
                {name: "Muzlik davri", seen: '24252', colorY: 'true', id: 2},
                {name: "Clone", seen: '54343', colorY: 'true', id: 3},
                {name: "Jack Richert", seen: '84664', colorY: 'true', id: 4},
            ]
        };
    };
    delete = id => {
        this.setState( ({ data }) => {
            const newData = data.filter( item => item.id !== id);
            return {
                data: newData
            }
        }) 
    }

    addForm = (e, item) => {
        e.preventDefault();
        this.setState( ({ data }) => {
            const newArray = [...data, {...item, id: uuidv4()}];
            console.log(newArray);
            return {
                data: newArray,
            }
        })
    }

    render() {
        const data = this.state.data;
        const del = this.delete
        return(
            <div>
                <KinolarSoni />
                <QidirPanel />
                <Klist data = {data} del={del}/>
                <KinoQoshish addForm={this.addForm} />
            </div>
        )
    }
}


export default App;