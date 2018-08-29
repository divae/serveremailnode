import axios from 'axios';
import { FETCH_USER } from 'action/types';

const fechUser = () => {
    return function (dispatch) {
        axios.
        get('/api/current_user')
        .then(res => dispatch({type : FETCH_USER, payload : res})
        );

    }
}