// __tests__/MyComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import InventoryList from "../components/ui/inventory/InventoryList.jsx";

test('renders MyComponent with correct name', () => {
  render(<InventoryList  />);

  //expect(screen.getByText('Hello, World!')).toBeInTheDocument(); 
});