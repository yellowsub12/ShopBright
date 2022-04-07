import {render, screen, cleenup } from '@testing-library/react'
import CategoryProducts from '../Category/CategoryProducts'

test('testing Category Products', () => {
    render(<CategoryProducts />);
    const categoryProductsElement = screen.getByTestId('categoryProducts');
    expect(categoryProductsElement).toBeInTheDocument();

})