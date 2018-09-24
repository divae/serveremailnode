import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from 'reducers/authReducer';
import surveysReducer from 'reducers/surveysReducer';


export default combineReducers({
    auth : authReducer,
    form : reduxForm,
    surveys:surveysReducer
});