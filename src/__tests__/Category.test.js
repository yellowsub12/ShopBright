import {render, screen, cleenup } from '@testing-library/react'
import Category from '../Category/Category'

test('testing Category', () => {
    render(<Category />);
    const categoryElement = screen.getByTestId('category');
    expect(categoryElement).toBeInTheDocument();

})