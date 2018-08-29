import axios from 'axios';
import { FETCH_USER } from 'action/types';

const fechUser = () => {
    axios.get('/api/current_user');
}