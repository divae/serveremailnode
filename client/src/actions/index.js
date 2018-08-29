import axios from 'axios';
import { FETCH_USER } from 'actions/types';


export const fechUser = () => async dispatch => dispatch({ type : FETCH_USER,  payload : await axios.get('/api/current_user') });