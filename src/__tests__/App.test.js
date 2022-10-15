import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { mockPosts } from '../../__mocks__/fileMock';
import App from '../App';
require('jest-fetch-mock');

describe('User Posts', () => {
  test('displays user posts', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockPosts),
      });
    });
    await act(async () => {
      render(<App />);
    });

    const firstPost = await screen.findByText(
      /suscipit suscipit recusandae consequuntur expedita/i
    );
    expect(firstPost).toBeDefined();
  });
});
