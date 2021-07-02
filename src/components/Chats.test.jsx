import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MemoryRouter } from 'react-router-dom';
import Chats from './Chats';

describe('Chats Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Chats />
            </MemoryRouter>
        );
    });

    it('Debería renderizarse el Chats sin estrellarse', () => {
        const Vista = screen.getByTestId('Chats');
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