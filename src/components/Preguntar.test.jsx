import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MemoryRouter } from 'react-router-dom';
import Preguntar from './Preguntar';
import Cookies from 'js-cookie';
//import Cookies from 'universal-cookie'

describe('Preguntar Component', () => {

    //fakeCookie.cookie = `usuario=${usuario}`

    beforeEach(() => {
        /*
                var usuario = {
                    "_id": "60ba911f3d8ab40015670a4b",
                    "tipo": "Paciente",
                    "nombre": "prueba",
                    "apellido": "losoy",
                    "user": "pbasoy",
                    "password": "12345678",
                    "nacimiento": "2021-03-04",
                    "sexo": "hombre",
                    "telefono": "0424256893",
                    "email": "soy@uncorreo.com",
                    "direccion": "mi casita en el monte",
                    "__v": 0,
                    "aprobado": true,
                }
        */
/*
        const cookieHandler = new Cookies({ myCookie: 'meow!' });

        cookieHandler.set('usuario', {
            "_id": "60ba911f3d8ab40015670a4b",
            "tipo": "Paciente",
            "nombre": "prueba",
            "apellido": "losoy",
            "user": "pbasoy",
            "password": "12345678",
            "nacimiento": "2021-03-04",
            "sexo": "hombre",
            "telefono": "0424256893",
            "email": "soy@uncorreo.com",
            "direccion": "mi casita en el monte",
            "__v": 0,
            "aprobado": true,
        }, { path: '/' });
*/
        //Cookies.set('usuario', `'${usuario}'`, { path: '/preguntar' })

        //var usuarioString = usuario.toString();
        /*
                Object.defineProperty(window.document, 'cookie', {
                    writable: true,
                    value: `usuario=${usuario}`,
                  });
        */
        render(
            <MemoryRouter>
                <Preguntar />
            </MemoryRouter>
        );
    });

    it('Debería renderizarse el Preguntar sin estrellarse', () => {
        const Vista = screen.getByTestId('Preguntar');
        expect(Vista).toBeInTheDocument();
    });

    it('Debería estar oculto el cargando', () => {
        const Vista = screen.getByTestId('cargando');
        expect(Vista).not.toBeVisible()
    });


    it('Si existe el usuario en Cookies renderizarse el Form sin estrellarse', async () => {
        if (Cookies.get('usuario')) {
            const Vista = screen.getByTestId('form-pregunta');
            expect(Vista).toBeInTheDocument();
        }
    });

    it('Debería renderizarse el Header con el menu', () => {
        const Vista = screen.getByTestId('header');
        expect(Vista).toBeVisible()
    });

    it('Debería renderizarse el Waves con el menu', () => {
        const Vista = screen.getByTestId('hero-waves');
        expect(Vista).toBeInTheDocument()
    });

});