import * as actionTypes from './actionTypes';

export const increaseCounter=()=> ({
    //parametreler
    type:actionTypes.INCREASE_COUNTER, //aksion tipi
    payload:1
})

export const decreaseCounter=()=> ({
    //parametreler
    type:actionTypes.DECREASE_COUNTER, //aksion tipi
    payload:1
})

export const increaseByTwoCounter=()=> ({
    //parametreler
    type:actionTypes.INCREASE_BY_TWO_COUNTER, //aksion tipi
    payload:2
})

export const deleteCounter=()=> ({
    //parametreler
    type:actionTypes.DELETE_COUNTER, //aksion tipi
    payload:1
})

