import * as constants from '../constants/busConstants';
import * as busServices from '../services/busServices';

export const saveTrips = data => ({
    type: constants.SAVE_TRIPS,
    payload: data
});

export const getTrips = () => {
    return async dispatch => {
        try {
            const resp = await busServices.getTrips();
            console.log(resp);
            dispatch(saveTrips(resp.data.data));
        } catch(err) {
            throw new Error(err);
        }
    };
};