import React from 'react';
import { render, screen, logRoles } from '@testing-library/react';
import { mockUsers } from '../../__mocks__/fileMock';
import App from '../App';
require('jest-fetch-mock');

describe('User Names', () => {
   afterEach(() => jest.resetAllMocks());
  test('display user names', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockUsers),
      });
    });
    await render(<App />);
    

    const firstPost = await screen.findByText(
      /^Terry Medhurst$/
    );

    expect(firstPost).toBeDefined();

    const lastPost = await screen.findByText(
      /^Eleanora Price$/
    );

    expect(lastPost).toBeDefined();
  });
});