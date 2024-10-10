import * as constants from '../constants/authConstants';
import * as authServices from '../services/authServices';
import toastr from 'toastr';

export const saveUserData = data => ({
    type: constants.SAVE_USER_DATA,
    payload: data
});

export const postLoginCredentials = (data, callback) => {
    return async dispatch => {
        try {
            const resp = await authServices.postLoginCredentials(data);
            dispatch(saveUserData(resp.data.data));
            callback({success: true});
        } catch(err) {
            callback({error: true});
            toastr.error(err.response.data.message)
            //throw new Error(err);
        }
    };
};