import * as type from '../constants/action-types';
import * as itemApi from '../../api/dataApi';

export function fetchPlace(latLong) {
    return function (dispatch) {
        return itemApi.getPlace(latLong).then(place => {
            dispatch({type: type.FETCH_PLACE, place});
        });
    }
};

export function fetchLocation(place) {
    return function (dispatch) {
        return itemApi.getLocation(place).then(coordinates => {
            dispatch({type: type.FETCH_COORDINATES, coordinates});
        });
    }
};

export function fetchWeather(lat, long) {
    return function (dispatch) {
        return itemApi.getWeather(lat, long).then(weather => {
            dispatch({type: type.FETCH_WEATHER, weather});
        });
    }
};
