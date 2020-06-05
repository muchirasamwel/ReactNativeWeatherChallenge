import axios from 'axios'
import {handleResponse, handleError, PlaceAPI} from './apiUtils'
import {Platform} from "react-native";
import {base_url} from '../mixins/global_vars';

const config = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
    }
}

const api_key=PlaceAPI;

export async function getItems() {
    return await axios
        .get(base_url + 'get-items')
        .then(handleResponse)
        .catch(handleError);
};
export async function getPlace(latLong) {
    return await axios
        .get("http://api.positionstack.com/v1/reverse?access_key="+api_key+"&query="+latLong+"&limit=3")
        .then(resp=>{
            return resp.data;
        })
        // .catch(handleError);
};

export async function getLocation(place) {
    return await axios
        .get("http://api.positionstack.com/v1/forward?access_key="+api_key+"&query="+place+"&limit=3")
        .then(resp=>{
            return resp.data;
        })
    // .catch(handleError);
};
export async function addItem(photo, body) {
    let formData = createFormData(photo, body);
    return await
        axios.post(base_url + 'api/upload', formData, config)
            .then((resp) => {
                if (resp.data.status === 200) {
                    return getItem(resp.data.id);
                }
                return null;
            })

}

const createFormData = (photo, body) => {
    const data = new FormData();
    data.append("image", {
        name: photo.fileName,
        type: photo.type,
        uri: Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });

    Object.keys(body).forEach(key => {
        data.append(key, body[key]);
    });

    return data;
};

export async function deleteItem(id) {
    return await axios
        .delete(base_url + 'delete-item/?id=' + id)
        .then(handleResponse)
        .catch(handleError);
}

async function getItem(id) {
    return await axios
        .get(base_url + 'item/' + id)
        .then(response => {
            return response;
        })
}

