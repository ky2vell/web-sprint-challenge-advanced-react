import React from 'react';
import { render, screen } from '@testing-library/react';
import { plantsData } from '../../../data/plantData';
import ShoppingCart from './ShoppingCart';

test('displays plants in cart', () => {
  render(<ShoppingCart cart={plantsData} />);

  expect(screen.getByText(/Peperomia Rosso/i)).toBeInTheDocument();
});
