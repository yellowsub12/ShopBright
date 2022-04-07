import {render, screen, cleenup } from '@testing-library/react'
import Login from '../Login'

test('testing Login', () => {
    render(<Login />);
    const loginElement = screen.getByTestId('login');
    expect(loginElement).toBeInTheDocument();

})