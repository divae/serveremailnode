import axios from 'axios';
import { FETCH_USER } from 'actions/types';


export const fechUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    
    dispatch({ type : FETCH_USER, payload : res });

};