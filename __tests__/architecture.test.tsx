import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./external-dependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders component with default props', async () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/default content/i)).toBeInTheDocument();
  });

  test('handles user interaction - button click', async () => {
    const mockFunction = jest.fn();
    render(<DesignArchitectureComponent onButtonClick={mockFunction} />);

    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  test('manages loading state when fetching data', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'loading' });
    render(<DesignArchitectureComponent />);

    await waitFor(() => screen.getByText(/loading.../i));
    expect(screen.queryByText(/default content/i)).not.toBeInTheDocument();
  });

  test('displays error message when data fetching fails', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'error' });
    render(<DesignArchitectureComponent />);

    await waitFor(() => screen.getByText(/an error occurred/i));
    expect(screen.queryByText(/default content/i)).not.toBeInTheDocument();
  });

  test('ensures accessibility for all interactive elements', async () => {
    render(<DesignArchitectureComponent />);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveAttribute('aria-label');
    fireEvent.click(button);
    await waitFor(() => screen.getByText(/content updated/i));
  });

  test('mocks external data fetching and handles success state', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: { title: 'Sample Title' } });
    render(<DesignArchitectureComponent />);
    
    await waitFor(() => screen.getByText(/sample title/i));
    expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument();
  });

  test('handles edge case - empty data response', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: {} });
    render(<DesignArchitectureComponent />);

    await waitFor(() => screen.getByText(/no content available/i));
    expect(screen.queryByText(/default content/i)).not.toBeInTheDocument();
  });

  test('validates form input and shows error message on invalid submission', async () => {
    const mockFunction = jest.fn();
    render(<DesignArchitectureComponent onSubmit={mockFunction} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => screen.getByText(/please enter a valid name/i));
  });

  test('triggers form submission on valid input and resets the form', async () => {
    const mockFunction = jest.fn();
    render(<DesignArchitectureComponent onSubmit={mockFunction} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => expect(mockFunction).toHaveBeenCalledWith({ name: 'John Doe' }));
  });

  test('ensures keyboard navigation and focus management for accessibility', async () => {
    render(<DesignArchitectureComponent />);
    
    const input = screen.getByLabelText(/name/i);
    fireEvent.focus(input);
    expect(document.activeElement).toBe(input);

    fireEvent.blur(input);
    await waitFor(() => expect(document.activeElement).not.toBe(input));
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./external-dependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  test('renders component with default props', async () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/default content/i)).toBeInTheDocument();
  });

  test('handles user interaction - button click', async () => {
    const mockFunction = jest.fn();
    render(<DesignArchitectureComponent onButtonClick={mockFunction} />);

    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  test('manages loading state when fetching data', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'loading' });
    render(<DesignArchitectureComponent />);

    await waitFor(() => screen.getByText(/loading.../i));
    expect(screen.queryByText(/default content/i)).not.toBeInTheDocument();
  });

  test('displays error message when data fetching fails', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'error' });
    render(<DesignArchitectureComponent />);

    await waitFor(() => screen.getByText(/an error occurred/i));
    expect(screen.queryByText(/default content/i)).not.toBeInTheDocument();
  });

  test('ensures accessibility for all interactive elements', async () => {
    render(<DesignArchitectureComponent />);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveAttribute('aria-label');
    fireEvent.click(button);
    await waitFor(() => screen.getByText(/content updated/i));
  });

  test('mocks external data fetching and handles success state', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: { title: 'Sample Title' } });
    render(<DesignArchitectureComponent />);
    
    await waitFor(() => screen.getByText(/sample title/i));
    expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument();
  });

  test('handles edge case - empty data response', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: {} });
    render(<DesignArchitectureComponent />);

    await waitFor(() => screen.getByText(/no content available/i));
    expect(screen.queryByText(/default content/i)).not.toBeInTheDocument();
  });

  test('validates form input and shows error message on invalid submission', async () => {
    const mockFunction = jest.fn();
    render(<DesignArchitectureComponent onSubmit={mockFunction} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => screen.getByText(/please enter a valid name/i));
  });

  test('triggers form submission on valid input and resets the form', async () => {
    const mockFunction = jest.fn();
    render(<DesignArchitectureComponent onSubmit={mockFunction} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => expect(mockFunction).toHaveBeenCalledWith({ name: 'John Doe' }));
  });

  test('ensures keyboard navigation and focus management for accessibility', async () => {
    render(<DesignArchitectureComponent />);
    
    const input = screen.getByLabelText(/name/i);
    fireEvent.focus(input);
    expect(document.activeElement).toBe(input);

    fireEvent.blur(input);
    await waitFor(() => expect(document.activeElement).not.toBe(input));
  });
});