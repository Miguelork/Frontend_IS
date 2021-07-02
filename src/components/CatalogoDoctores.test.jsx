import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MemoryRouter } from 'react-router-dom';
import CatalogoDoctores from './CatalogoDoctores';

describe('CatalogoDoctores Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <CatalogoDoctores />
            </MemoryRouter>
        );
    });

    it('Debería renderizarse el Catalogo de Doctores sin estrellarse', () => {
        const Vista = screen.getByTestId('Catalogo');
        expect(Vista).toBeInTheDocument();
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