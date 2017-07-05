import T from "../constants/ActionTypes";
import V from "../constants/PanelView";
import mapConst from "../constants/Map";
import parseURL from "../util/parseURL";

const initialState = "";

const NUM_DECIMAL_PLACES_FOR_CENTER = 4;

const searchTextToUrlQuery = (text) => {
  let query = "&search=" 
    + encodeURIComponent(text.replace(/^\s/, "").replace(/\s+/g, " "));
  return query;
}

module.exports = (state=initialState, action={}) => {
  var { center, zoom, entry, search_text, view } = action;

  switch(action.type){
    case T.UPDATE_STATE_FROM_URL:
      return window.location.hash;
    // case T.SHOW_SUBSCRIBE_TO_MAP_VIEW:
    //   window.location.hash = "/?view=subscribeToMapView";
    //   return window.location.hash;

    case T.URL_SET_CENTER: // fall through
    case T.URL_SET_ZOOM: // fall through
    case T.URL_SET_CURRENT_ENTRY: // fall through
    case T.URL_SET_SEARCH: // fall through
    case T.URL_SET_TAGS:
      console.log("view:", view);
      if(view.left != V.SUBSCRIBE_TO_MAP_VIEW){
        if(!entry && window.location.hash.includes("entry")){
          entry = /entry=([\w\d]*)/.exec(window.location.hash)[1];
        }
        window.location.hash = "/?"
          + ((entry && entry != "NONE") ? ("entry=" + entry) :
            ("center=" + center.lat.toFixed(NUM_DECIMAL_PLACES_FOR_CENTER)
            + "," +  center.lng.toFixed(NUM_DECIMAL_PLACES_FOR_CENTER)))
          + "&zoom=" + zoom
          + ((entry && entry != "NONE") ? "" : (search_text ? searchTextToUrlQuery(search_text) : ""));

        return window.location.hash;
      }

    default: 
      return state;
  }
};
