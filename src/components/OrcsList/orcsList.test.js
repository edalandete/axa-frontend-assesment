/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Router from 'react-router';

import OrcsList from './OrcsList';
import { render, screen, fireEvent } from '../../assets/test-utils';
import actionTypes from '../../redux/actions/actionTypes';

import
loadOrcs from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('Given a TasksList component', () => {
  describe('When it is rendered with no orcs', () => {
    test('Then should render Orcs List', () => {
      const initialState = { orcs: [] };
      loadOrcs.mockReturnValue({ type: actionTypes.LOAD_ORCS, orcs: [] });
      render(<OrcsList />, { initialState });
      expect(screen.getByText(/Orcs List/)).toBeInTheDocument();
    });
  });
  describe('When its rendered with an Orc List', () => {
    const initialState = {
      orcs: [{
        id: '123',
        name: 'Urun'
      }]
    };
    test('Should render Urun', () => {
      loadOrcs.mockReturnValue({
        type: actionTypes.LOAD_ORCS,
        orcs: [{
          id: '123',
          name: 'Urun'
        }]
      });

      jest.spyOn(Router, 'useParams').mockReturnValue({ id: '123' });

      global.window = { location: { pathname: '/123' } };

      render(<OrcsList />, { initialState });

      expect(screen.getByText(/Urun/)).toBeInTheDocument();
    });

    test('And an Orc is clicked', () => {
      loadOrcs.mockReturnValue({
        type: actionTypes.LOAD_ORCS,
        orcs: [{
          id: '123',
          name: 'Urun'
        }]
      });

      render(<OrcsList />, { initialState });
      fireEvent.click(screen.getByTestId('123'));
      expect(global.window.location.pathname).toEqual('/123');
    });
  });
});
