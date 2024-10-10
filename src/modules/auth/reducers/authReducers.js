import * as constants from '../constants/authConstants';

const initialState = {
    userData: {}
};

const authReducers =  (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_USER_DATA:
            console.log(action.payload);
            return {
                ...state,
                userData: action.payload
            };

        default:
            return state;
    }
};

export default authReducers;