import * as type from '../constants/action-types';

const initialState = {
    coordinates:{},
    place:'',
    weather: {},

};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case type.FETCH_WEATHER:
            return Object.assign({}, state, {
                weather: action.weather
            });
        case type.FETCH_COORDINATES:
            return Object.assign({}, state, {
                coordinates: action.coordinates
            });
        case type.FETCH_PLACE:
            return Object.assign({}, state, {
                place: action.place
            });
        default:
            return state;
    }
};
export default rootReducer;
