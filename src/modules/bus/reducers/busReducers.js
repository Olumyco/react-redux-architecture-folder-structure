import * as constants from '../constants/busConstants';

const initialState = {
    trips: []
};

const busReducers =  (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_TRIPS:
            return {
                ...state,
                trips: action.payload
            };

        default:
            return state;
    }
};

export default busReducers;