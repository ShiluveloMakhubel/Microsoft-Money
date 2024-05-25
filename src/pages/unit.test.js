import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NLPPage from './NLPPage';
import { getNLPResponse } from '../services/services/services';
import '@testing-library/jest-dom';

jest.mock('../services/services/services', () => ({
  getNLPResponse: jest.fn(),
}));

describe('NLPPage', () => {
  beforeEach(() => {
    render(<NLPPage />);
  });

  it('should render input and send button', () => {
    expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  it('updates input field as user types', async () => {
    const input = screen.getByPlaceholderText('Type your message...');
    await userEvent.type(input, 'Hello');
    expect(input.value).toBe('Hello');
  });

  
});

