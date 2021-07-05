/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import OrcDetail from './OrcDetail';
import { render, screen, fireEvent } from '../../assets/test-utils';
import actionTypes from '../../redux/actions/actionTypes';

describe('Given a TasksList component', () => {
  describe('When it is rendered with no orcs', () => {
    test('Then should render Orcs List', () => {
      const initialState = {
        orcs: [{
          id: '123',
          name: 'Urun'
        }]
      };
      // loadOrcs.mockReturnValue({ type: actionTypes.LOAD_ORCS, orcs: [] });
      render(<OrcDetail />, { initialState });
      expect(screen.getByText(/Urun/)).toBeInTheDocument();
    });
  });
  // describe('When its rendered with an Orc List', () => {
  //   const initialState = {
  //     orcs: [{
  //       id: '123',
  //       name: 'Urun'
  //     }]
  //   };
  //   test('Should render Urun', () => {
  //     loadOrcs.mockReturnValue({
  //       type: actionTypes.LOAD_ORCS,
  //       orcs: [{
  //         id: '123',
  //         name: 'Urun'
  //       }]
  //     });

  //     render(<OrcDetail />, { initialState });

  //     expect(screen.getByText(/Urun/)).toBeInTheDocument();
  //   });

  //   test('And an Orc is clicked', () => {
  //     loadOrcs.mockReturnValue({
  //       type: actionTypes.LOAD_ORCS,
  //       orcs: [{
  //         id: '123',
  //         name: 'Urun'
  //       }]
  //     });

  //     render(<OrcDetail />, { initialState });
  //     fireEvent.click(screen.getByTestId('123'));
  //     expect(global.window.location.pathname).toEqual('/123');
  //   });
  // });
});
