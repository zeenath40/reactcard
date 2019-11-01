import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';
class Avatar extends Component {
    constructor() {
        super();
        this.state = {
            name: "This is Card example"
        }
    }

    namechange() {
        this.setState({
            name: "Successful"
        })
    }

    render() {
        const avatarlistarray = [
            {
                id: 1,
                name: "zeenath",
                work: "UI developer"
            },
            {
                id: 2,
                name: "Asma",
                work: "Frontend developer"
            },
            {
                id: 3,
                name: "Afu",
                work: "Content Writer"
            },
            {
                id: 4,
                name: "Mushi",
                work: "Developer"
            }
        ]
        const samplecard = avatarlistarray.map((avatarcard, i) => {
            return (
                <Avatarlist key={i} id={avatarlistarray[i].name}
                    name={avatarlistarray[i].name}
                    work={avatarlistarray[i].work} />
            )
        })

        return (<div className="mainpage">
            <h1> {this.state.name} </h1>
            {samplecard}
            <button onClick={() => this.namechange()}> submit </button>
        </div>
        )
    }
}

export default Avatar;