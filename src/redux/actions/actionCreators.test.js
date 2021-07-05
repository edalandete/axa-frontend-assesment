import axios from 'axios';
import actionTypes from './actionTypes';
import
loadOrcs
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
