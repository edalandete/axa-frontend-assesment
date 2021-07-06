import axios from 'axios';
import actionTypes from './actionTypes';
import
{ loadOrcs, filterOrcs }
  from './actionCreators';

jest.mock('axios');

describe('Given a loadOrcs action creator', () => {
  describe('When it is called by the dispatcher and the response is OK', () => {
    test('Then should load a list of orvd', async () => {
      const orcs = {
        data: {
          Brastlewark: [{ name: 'orc 1' }]
        }
      };

      axios.mockResolvedValue(orcs);

      const dispatch = jest.fn();
      await loadOrcs()(dispatch);

      expect(dispatch).toHaveBeenCalledWith(
        {
          type: actionTypes.LOAD_ORCS,
          orcs: [{ name: 'orc 1' }]
        }
      );
    });
  });

  describe('When it is called by the dispatcher and the response is NOK', () => {
    test('Then should dispatch an error', async () => {
      axios.mockRejectedValue();

      const dispatch = jest.fn();
      await loadOrcs()(dispatch);

      expect(dispatch).toHaveBeenCalledWith(
        {
          type: actionTypes.LOAD_ORCS_ERROR
        }
      );
    });
  });
});

describe('Given a filter action creator', () => {
  describe('When it is called by the dispatcher with a search param and the response is OK', () => {
    test('Then should load a list of orcs', async () => {
      const orcs = [{ name: 'orc 1', hair_color: 'pink' }];

      const dispatch = jest.fn();
      await filterOrcs(orcs, 'pink')(dispatch);

      expect(dispatch).toHaveBeenCalledWith(
        {
          type: actionTypes.FILTER_ORCS,
          filteredOrcs: orcs
        }
      );
    });
  });

  describe('When it is called by the dispatcher with a search param and the response is NOK', () => {
    test('Then should dispatch an error', async () => {
      const dispatch = jest.fn();
      await filterOrcs(null, 'pink')(dispatch);

      expect(dispatch).toHaveBeenCalledWith(
        {
          type: actionTypes.FILTER_ORCS_ERROR
        }
      );
    });
  });

  describe('When it is called by the dispatcher with no search param', () => {
    test('Then should load a list of orcs', async () => {
      const orcs = [{ name: 'orc 1', hair_color: 'pink' }];

      const dispatch = jest.fn();
      await filterOrcs(orcs)(dispatch);

      expect(dispatch).toHaveBeenCalledWith(
        {
          type: actionTypes.FILTER_ORCS,
          filteredOrcs: orcs
        }
      );
    });
  });
});
