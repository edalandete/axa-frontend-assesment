/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import OrcDetail from './OrcDetail';
import { render, screen } from '../../assets/test-utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: '123' })
}));

describe('Given a TasksList component', () => {
  describe('When it is rendered with no orcs', () => {
    test('Then should render Orcs List', () => {
      const initialState = {
        orcs: [{
          id: '123',
          name: 'Urun'
        }]
      };

      render(<OrcDetail />, { initialState });
      expect(screen.getByText(/Urun/)).toBeInTheDocument();
    });
  });
});
