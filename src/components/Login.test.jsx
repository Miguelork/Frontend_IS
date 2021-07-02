import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

describe('Login Component', () => {
    const onKeyUpMock = jest.fn();

    beforeEach(() => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
    });

    it('Debería renderizarse el Login sin estrellarse', () => {
        const Vista = screen.getByTestId('Login');
        expect(Vista).toBeInTheDocument();
    });

    it('Deberia poder modificar el input del usuario', () => {
        const inputElement = screen.getByTestId('input-user');
        const value = 'Usuario';
        userEvent.type(inputElement, value);
        expect(inputElement).toHaveValue(value)
      });

      it('Deberia poder modificar el input del password', () => {
        const inputElement = screen.getByTestId('input-password');
        const value = 'Usuario';
        userEvent.type(inputElement, value);
        expect(inputElement).toHaveValue(value)
      });

      it('Deberia poder estar requerido el input del usuario', () => {
        const inputElement = screen.getByTestId('input-user');
        expect(inputElement).toBeRequired()
      });

      it('Deberia poder estar requerido el input del password', () => {
        const inputElement = screen.getByTestId('input-password');
        expect(inputElement).toBeRequired()
      });

      it('Deberia estar visible el form de login', () => {
        const FormElement = screen.getByTestId('form-login');
        expect(FormElement).toBeVisible()
      });

      it('Deberia estar oculto el loader del form de login', () => {
        const LoaderElement = screen.getByTestId('cargando-login');
        expect(LoaderElement).not.toBeVisible()
      });

});