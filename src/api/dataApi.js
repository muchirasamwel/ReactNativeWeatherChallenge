import axios from 'axios'
import {PLACE_API, WEATHER_API} from './apiUtils'
import {base_url} from '../mixins/global_vars';

const config = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
    }
}


export async function getPlace(latLong) {
    return await axios
        .get("http://api.positionstack.com/v1/reverse?access_key="+PLACE_API+"&query="+latLong+"&limit=3")
        .then(resp=>{
            return resp.data;
        })
        // .catch(handleError);
};

export async function getLocation(place) {
    return await axios
        .get("http://api.positionstack.com/v1/forward?access_key="+PLACE_API+"&query="+place+"&limit=3")
        .then(resp=>{
            return resp.data;
        })
    // .catch(handleError);
};

export async function getWeather(lat, log) {
    return await axios
        .get('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + log + '&exclude=minute&appid='+WEATHER_API)
        .then(response => {
            return response.data;
        })
}

