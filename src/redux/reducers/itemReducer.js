import * as type from "../constants/action-types"

const initialState = {
    coordinates:{},
    place:'',
    items: [],
    authors:[{name:'hen'}],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case type.FETCH_ITEMS:
            return Object.assign({}, state, {
                items:action.items
            });
        case type.ADD_ITEM:
            return Object.assign({}, state, {
                items: state.items.concat(action.item)
            });
        case type.FETCH_COORDINATES:
            return Object.assign({}, state, {
                coordinates: action.coordinates
            });
        case type.FETCH_PLACE:
            return Object.assign({}, state, {
                place: action.place
            });
        case type.DELETE_ITEM:
            alert("Item Deleted successfully");
            return Object.assign({}, state, {
                items: state.items.filter(item => item.id !== action.id)
            });
        default:
            return state;
    }
};
export default rootReducer;
