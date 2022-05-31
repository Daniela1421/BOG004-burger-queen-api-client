// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
//import Fetch from '../fetch'
import Login from './Login'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'

describe('Component Login', () => {
	

	it('Error message', async () => {
		const history = createMemoryHistory()
  render(
			<Router location={history.location} navigator={history}>
      <Login />
    </Router>
		)
		const emailInput = screen.getByTestId('input-email')
		const passwordInput = screen.getByTestId('input-password')
		fireEvent.change(emailInput, {target: {value: 'probando@gmail.com'}})
		fireEvent.change(passwordInput, {target: {value: '1234567890'}})
		const btnLogin = screen.getByText('SIGN IN')
		fireEvent.click(btnLogin)
		let error;
		await waitFor(() => error = screen.getByTestId('login-error'))
		expect(error.textContent).toBe('Cannot find user')
	});

	it('validate credentials', async () => {
		const history = createMemoryHistory()
  render(
			<Router location={history.location} navigator={history}>
      <Login />
    </Router>
		)
		const emailInput = screen.getByTestId('input-email')
		const passwordInput = screen.getByTestId('input-password')
		fireEvent.change(emailInput, {target: {value: 'mesero1@gmail.com'}})
		fireEvent.change(passwordInput, {target: {value: '123456'}})
		const btnLogin = screen.getByText('SIGN IN')
		fireEvent.click(btnLogin)
		let error;
		await waitFor(() => error = screen.getByTestId('login-error'))
		expect(error.textContent).toBe('Cannot find user')
	})
	;)
}