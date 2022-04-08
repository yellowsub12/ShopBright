import {render, screen, cleenup } from '@testing-library/react'
import Search from '../Search/Search'

test('testing Search', () => {
    render(<Search />);
    const searchElement = screen.getByTestId('search');
    expect(searchElement).toBeInTheDocument();

})