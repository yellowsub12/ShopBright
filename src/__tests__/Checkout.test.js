import {render, screen, cleenup } from '@testing-library/react'
import Checkout from '../Checkout'

test('testing Checkout', () => {
    render(<Checkout />);
    const checkoutElement = screen.getByTestId('checkout');
    expect(checkoutElement).toBeInTheDocument();

})