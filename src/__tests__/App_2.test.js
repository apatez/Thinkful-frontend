import React from 'react';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { mockUsers, mockPosts } from '../../__mocks__/fileMock';
import App from '../App';
require('jest-fetch-mock');

describe('User Posts', () => {
  afterEach(() => jest.resetAllMocks());

  test('displays posts for first user when the first user name is clicked', async () => {
    const mockFetch = jest
      .spyOn(global, 'fetch')
      .mockImplementationOnce((url) => {
        return Promise.resolve({
          json: () => {
            if (url.endsWith('select=firstName,lastName')) {
              return Promise.resolve(mockUsers);
            }

            if (url.endsWith('posts?limit=5')) {
              return Promise.resolve(mockPosts);
            }

            return Promise.resolve([]);
          },
        });
      });

    await render(<App />);

    const firstPost = await screen.findByText(
      /^Terry Medhurst$/
    );

    expect(firstPost).toBeDefined();

    fireEvent.click(firstPost);
    
    mockFetch.mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockPosts),
      });
    });
    
    const firstUserPost = await screen.findByText(
      /They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all./i
    );
    expect(firstUserPost).toBeDefined();

    expect(mockFetch).toHaveBeenNthCalledWith(
      2,
      'https://dummyjson.com/posts/user/1'
    );
  });
});
