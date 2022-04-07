import {render, screen, cleenup } from '@testing-library/react'
import Orders from '../Orders'

test('testing Orders', () => {
    render(<Orders />);
    const ordersElement = screen.getByTestId('orders');
    expect(ordersElement).toBeInTheDocument();

})