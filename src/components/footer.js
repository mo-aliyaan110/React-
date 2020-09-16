// Now I am creating the functional component as a class compenent
import React, {Component} from 'react';
class Footer extends Component{
    constructor(){
        super()
        this.state ={
            title: '2020',
            keyword: 'November',
        }
    }
    render(){
        return(
            <React.Fragment>
                <hr/>
                <center> <h3> All Rights Reserved {this.state.keyword} {this.state.title} </h3> </center>
            </React.Fragment>
        )
    }
}
export default Footer;



// this is my functional component in the component but I am using the above class component
// const Footer = (props) =>{
//     return(
//         <React.Fragment>
//             <hr/>
//             <center><h3>All rights Reserved || || {props.month} {props.year} </h3></center>
//         </React.Fragment>
//     )
// }
