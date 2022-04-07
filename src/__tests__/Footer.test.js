import {render, screen, cleenup } from '@testing-library/react'
import Footer from '../Footer/footer'

test('testing footer', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();

})