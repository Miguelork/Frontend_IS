import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MemoryRouter } from 'react-router-dom';
import Foro from './Foro';

describe('Foro Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Foro />
            </MemoryRouter>
        );
    });

    it('Debería renderizarse el Foro sin estrellarse', () => {
        const Vista = screen.getByTestId('Foro');
        expect(Vista).toBeInTheDocument();
    });

    it('Deberia poder modificar el input del buscar', () => {
        const inputElement = screen.getByTestId('input-buscar');
        const value = 'COVID';
        userEvent.type(inputElement, value);
        expect(inputElement).toHaveValue(value)
    });

    it('Debería renderizarse la lista de preguntas con su respectiva clase', () => {
        const Vista = screen.getByTestId('lista-preguntas');
        expect(Vista).toHaveClass('faq-list')
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