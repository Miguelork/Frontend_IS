import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MemoryRouter } from 'react-router-dom';
import Preguntar from './Preguntar';

describe('Preguntar Component', () => {

    beforeEach(() => {
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

    it('Debería renderizarse el Header con el menu', () => {
        const Vista = screen.getByTestId('header');
        expect(Vista).toBeVisible()
    });

    it('Debería renderizarse el Waves con el menu', () => {
        const Vista = screen.getByTestId('hero-waves');
        expect(Vista).toBeInTheDocument()
    });

});