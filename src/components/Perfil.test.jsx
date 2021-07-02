import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MemoryRouter } from 'react-router-dom';
import Perfil from './Perfil';

describe('Perfil Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Perfil />
            </MemoryRouter>
        );
    });

    it('Debería renderizarse el Perfil sin estrellarse', () => {
        const Vista = screen.getByTestId('Perfil');
        expect(Vista).toBeInTheDocument();
    });

    it('Debería renderizarse el div del Formulario con su respectiva clase', () => {
        const Vista = screen.getByTestId('Paciente');
        expect(Vista).toHaveClass('php-email-form')
    });

    it('Debería estar oculto el cargando', () => {
        const Vista = screen.getByTestId('cargando');
        expect(Vista).not.toBeVisible()
    });
    
    it('Debería renderizarse la imagen de esta vista', () => {
        const Vista = screen.getByTestId('imagenero');
        expect(Vista).toBeVisible()
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