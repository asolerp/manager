import { EMPLOYE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
}


export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EMPLOYE_UPDATE:
         // action.payload = { prop: 'name', value: 'alberto' }
         return {...state, [action.payload.prop]: action.payload.value }
        default:
            return state;
    }
}