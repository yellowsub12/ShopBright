import {render, screen, cleenup } from '@testing-library/react'
import Home from "../Home"

test('testing Home', () => {
    render(<Home />);
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();

})