import { combineReducers} from 'redux';

const initialState = {
    data : null
}

const data =  function(state = initialState, action) {
    switch(action.type){
        case 'DATA_FETCHED':
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    data : data
})

export default rootReducer;