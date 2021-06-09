import React from 'react';
import Header from './Header';
import Wave from './Wave';
import axios from 'axios';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const cookies = new Cookies();

function RespuestaForo() {

    // Obtenemos el parametro en esta variable
    const {id} = useParams();

    return(
        <div className="container">
            <h1>El Id es: {id}</h1>
        </div>
    )
}





export default RespuestaForo
