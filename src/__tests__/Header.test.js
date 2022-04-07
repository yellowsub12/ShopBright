import {render, screen, cleenup } from '@testing-library/react'
import Header from '../Header'

test('testing header', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();

})