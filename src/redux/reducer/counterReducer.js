import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 0, action) => {
  //state ise aksiyona göre state belirliyor.
  //reducer içerisinde basit state yöentimi yapılır.

  let newState;

  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);

    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);

    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);

    case actionTypes.DELETE_COUNTER:
      return (newState = state - action.payload);

    default:
      return state;
  }
};

export default counterReducer;

//javascript Immulabilitiy (referanslar için detaylı bilgi)
