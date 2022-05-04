import { createActions, handleActions } from 'redux-actions';
import { ImageState } from '../../types';

const initialState: ImageState = {
  number: null,
};

const prefix = 'baskinrobbins-template/imageNumber';
export const { change } = createActions('CHANGE', { prefix });

const reducer = handleActions<ImageState, number>(
  {
    CHANGE: (state, action) => ({
      number: action.payload,
    }),
  },
  initialState,
  { prefix }
);
export default reducer;
