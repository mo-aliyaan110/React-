import React, { Component } from 'react';
import Footer from '../components/footer';
import Header from '../components/Header';
import Contact from '../components/contact';
import {BrowserRouter, Route} from 'react-router-dom';
import About from '../components/about';



const Routing = () =>{
    return(
        // You need to put your code inside this BrowserRouter Only
        <BrowserRouter>
        <div>
            {/* Now you need to use the Route to do the routing, the syntax is very simple */}
            <Route path = "/" component={App}> </Route>
            <Route path = "/contact" component={Contact}> </Route>
            <Route path = "/about" component = {About}></Route>
        </div>
            
        </BrowserRouter>
    )
}
export default Routing; 