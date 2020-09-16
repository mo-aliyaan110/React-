import React, {Component} from 'react';



class Header extends Component{
    constructor(){
        super()
        this.state = {
            title : "01",
            label : "User Selected"
        }
    }

cityHandle = (event) =>{
    
    this.setState({label : `User Selected ${event.target.value}`})
}
    render(){
        return(


        <header>
            <h1>Internship </h1>
            <select onChange = {this.cityHandle}>
                <option value="Delhi"> Delhi </option>
                <option value="Mumbai"> Mumbai </option>
                <option value="Hyderabad" > Hyderabad </option>
            </select>
            <h3> {this.state.label} </h3>
            <hr/>
        </header>



            
            
        )
    }
}
export default Header;



