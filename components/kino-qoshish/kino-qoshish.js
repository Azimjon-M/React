import { Component } from 'react';
import './kino-qoshish.css';

class KinoQoshish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            seen: '',
        };
    };
    inpMalumot = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const { name, seen } = this.state
        const { addForm } = this.props
        return (
            <div className='kino-qoshish d-flex justify-content-between'>
                <h3>Kinolar qo'shish</h3>
                <form className="d-flex flex-row col-8" onSubmit={ e => addForm( e, { name, seen })}>

                    <input 
                    onChange={this.inpMalumot} 
                    type="text" 
                    className='form-control new-post-label mx-2' 
                    placeholder='Kino nomi'
                    name='name'
                    value={name} />

                    <input 
                    onChange={this.inpMalumot} 
                    type="number" 
                    className='form-control new-post-label mx-2' 
                    placeholder="Ko'rilgan"
                    name='seen'
                    value={seen} />

                    <button type='submit' className='btn btn-outline-primary mx-2 px-2 mx-2 style-w'>add</button>
                </form>
            </div>
        );
    }
};

export default KinoQoshish;
