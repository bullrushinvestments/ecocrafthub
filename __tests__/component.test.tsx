import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({ data: 'exampleData' }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching data', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({}).mockResolvedValueOnce({ data: 'exampleData' });
    render(<CoreFunctionalityComponent />);

    // Check for initial loading state
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait until the component updates with fetched data
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      expect(screen.getByText('exampleData')).toBeInTheDocument();
    });
  });

  test('handles error during data fetch', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to load'));
    render(<CoreFunctionalityComponent />);

    await waitFor(() => {
      expect(screen.getByText(/error loading data/i)).toBeInTheDocument();
    });
  });

  test('user interaction triggers data refresh', async () => {
    const mockRefreshData = jest.fn().mockResolvedValue({ data: 'refreshedData' });
    (fetchData as jest.Mock).mockImplementationOnce(mockRefreshData);
    render(<CoreFunctionalityComponent />);

    fireEvent.click(screen.getByRole('button', { name: /refresh/i }));

    await waitFor(() => {
      expect(mockRefreshData).toHaveBeenCalled();
      expect(screen.getByText(/refreshedData/i)).toBeInTheDocument();
    });
  });

  test('accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /refresh/i });

    // Check for proper aria-label
    expect(button).toHaveAttribute('aria-label', 'Refresh data');

    // Check for keyboard navigation support
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(fetchData).toHaveBeenCalled();
  });

  test('handles edge cases such as empty data response', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ data: null });
    render(<CoreFunctionalityComponent />);

    await waitFor(() => {
      expect(screen.getByText(/no data available/i)).toBeInTheDocument();
    });
  });

  test('handles edge cases such as unexpected data format', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ error: 'unexpected format' });
    render(<CoreFunctionalityComponent />);

    await waitFor(() => {
      expect(screen.getByText(/data format error/i)).toBeInTheDocument();
    });
  });

  test('handles edge cases such as network issues', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Network issue'));
    render(<CoreFunctionalityComponent />);

    await waitFor(() => {
      expect(screen.getByText(/network error/i)).toBeInTheDocument();
    });
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({ data: 'exampleData' }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching data', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({}).mockResolvedValueOnce({ data: 'exampleData' });
    render(<CoreFunctionalityComponent />);

    // Check for initial loading state
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait until the component updates with fetched data
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      expect(screen.getByText('exampleData')).toBeInTheDocument();
    });
  });

  test('handles error during data fetch', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to load'));
    render(<CoreFunctionalityComponent />);

    await waitFor(() => {
      expect(screen.getByText(/error loading data/i)).toBeInTheDocument();
    });
  });

  test('user interaction triggers data refresh', async () => {
    const mockRefreshData = jest.fn().mockResolvedValue({ data: 'refreshedData' });
    (fetchData as jest.Mock).mockImplementationOnce(mockRefreshData);
    render(<CoreFunctionalityComponent />);

    fireEvent.click(screen.getByRole('button', { name: /refresh/i }));

    await waitFor(() => {
      expect(mockRefreshData).toHaveBeenCalled();
      expect(screen.getByText(/refreshedData/i)).toBeInTheDocument();
    });
  });

  test('accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /refresh/i });

    // Check for proper aria-label
    expect(button).toHaveAttribute('aria-label', 'Refresh data');

    // Check for keyboard navigation support
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(fetchData).toHaveBeenCalled();
  });

  test('handles edge cases such as empty data response', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ data: null });
    render(<CoreFunctionalityComponent />);

    await waitFor(() => {
      expect(screen.getByText(/no data available/i)).toBeInTheDocument();
    });
  });

  test('handles edge cases such as unexpected data format', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ error: 'unexpected format' });
    render(<CoreFunctionalityComponent />);

    await waitFor(() => {
      expect(screen.getByText(/data format error/i)).toBeInTheDocument();
    });
  });

  test('handles edge cases such as network issues', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Network issue'));
    render(<CoreFunctionalityComponent />);

    await waitFor(() => {
      expect(screen.getByText(/network error/i)).toBeInTheDocument();
    });
  });
});