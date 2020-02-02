import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function PrivateRoute({component: Component, ...rest}){
    let token = localStorage.getItem('token');

    return (
        <Route 
        {...rest}
        render={props=>{
            console.log('THIS IS COMPONENT', Component)
            return token ? <Component {...props} /> : <Redirect to="/login" />
        }}
        
        />
    )
}