import React from 'react';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { mockPosts, mockComments } from '../../__mocks__/fileMock';
import App from '../App';
require('jest-fetch-mock');

describe('User Comments', () => {
  afterEach(() => jest.resetAllMocks());

  test('displays comments for first post when the first post is clicked', async () => {
    const mockFetch = jest
      .spyOn(global, 'fetch')
      .mockImplementationOnce((url) => {
        return Promise.resolve({
          json: () => {
            if (url.endsWith('userId=1')) {
              return Promise.resolve(mockPosts);
            }

            if (url.endsWith('comments')) {
              return Promise.resolve(mockComments);
            }

            return Promise.resolve([]);
          },
        });
      });

    await act(async () => {
      render(<App />);
    });
    const firstPost = await screen.findByText(
      /suscipit suscipit recusandae consequuntur expedita/i
    );

    expect(firstPost).toBeDefined();

    await act(async () => {
      firstPost.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      // fireEvent.click(firstPost);
    });
    mockFetch.mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockComments),
      });
    });
    const firstPostComments = await screen.findByText(
      /laudantium enim quasi est quidem magnam/i
    );
    expect(firstPostComments).toBeDefined();

    expect(mockFetch).toHaveBeenNthCalledWith(
      2,
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    );
  });
});
