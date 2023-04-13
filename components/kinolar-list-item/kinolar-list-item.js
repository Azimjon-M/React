import { Component } from 'react';
import './kinolar-list-item.css'

class KLitem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorY: false,
            star: false,
        }
    }

    onColor = () => {
        this.setState(({colorY}) => ({
            colorY: !colorY,
        })) 
    }

    onStar = () => {
        this.setState(({star}) => ({
            star: !star,
        }))
    }
    render() {
        const {name, seen, del} = this.props
        const {colorY, star} = this.state
        return(
        <li className={`div-1 list-group-item d-flex justify-content-between border border-1 border-success p-1 my-1`}>
            <span onClick={this.onStar} className={`${colorY && 'text-danger'} w-100 p-1`}>{name}</span>
            <div className="d-flex justfiy-content-center align-items-center">
            <input type="number" className={`form-control mx-1 ${colorY && 'text-danger'}`} defaultValue={seen}/>
                <button onClick={this.onColor} className="btn btn-outline-success px-2 mx-1">
                    O
                </button>
                <button onClick={del} className="btn btn-outline-danger px-2 mx-1">
                    X
                </button>
                <button className={`btn btn-warning px-2 mx-1 ${!star && 'd-none'} btn-star`}>
                    *
                </button>
            </div>
        </li>
        )
    }
}

export default KLitem;