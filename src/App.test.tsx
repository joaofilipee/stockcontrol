import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Component", () => {
  it("should render hello world", () => {
    render(<App />)
  
    screen.getByText("Hello World!")
  })
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
