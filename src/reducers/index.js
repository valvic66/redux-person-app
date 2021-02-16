import { combineReducers } from 'redux';
import PersonReducer from './PersonReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    persons: PersonReducer,
    selectedPerson: SelectionReducer
});