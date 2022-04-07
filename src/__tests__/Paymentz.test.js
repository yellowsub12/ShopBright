import {render, screen, cleenup } from '@testing-library/react'
import Paymentz from '../PaymentZ'

test('testing payment', () => {
    render(<Paymentz />);
    const paymentElement = screen.getByTestId('payment');
    expect(paymentElement).toBeInTheDocument();

})