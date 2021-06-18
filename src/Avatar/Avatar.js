//https://www.youtube.com/watch?v=43IbFDSVdB0
import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

class Avatar extends Component{
    constructor(){
        super();
            this.state = {
            name:"Welcome to Avatar World"
            }
    }
    namechange(){
        this.setState({
        name:"You are click on the button subscribes"
       })
    }
    render(){
        const avatarlistarray = [
            {
                id:1,
                name:"Ram",
                work:"All"
            },
            {
                id:2,
                name:"Hanuman",
                work:"Recuired to Ram"
            },
            {
                id:3,
                name:"Shiv",
                work:"Deside of the Nature"
            },
            {
                id:4,
                name:"Maa_Durga",
                work:"Maa is the all prakarti"
            }
        ]
        const avatarlistcard = avatarlistarray.map((avatarcard,i)=>{
            return <Avatarlist key={i} id={avatarlistarray[i].name} 
                               name={avatarlistarray[i].name} 
                               work={avatarlistarray[i].work}/>
        })
        return (
            <div className="mainpage">
                <h1 className="tc">{this.state.name}</h1>        
                 {avatarlistcard}
                <br />
                <button onClick={ () => this.namechange()}>Subscribe</button>
            </div>
            );
    }
}

export default Avatar;