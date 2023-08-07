
import { fromJS } from 'immutable';
import {SET_LOADING} from '../actions/types';


const initialState = fromJS({
    loading: false,
});

const uiReducers = (state, action) => ({
    [SET_LOADING]: () => state.set('loading', action.payload),
    
  });
  
  export const reducerUI = (state = initialState, action) => uiReducers(state, action)[action.type]?.() || state;
