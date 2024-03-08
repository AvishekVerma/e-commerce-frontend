import { api } from "../../config/apiConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCT_REQUEST})
    const { colors, sizes, minPrice, maxPrice, minDiscount, 
        category, stock, sort, pageNumber, pageSize } = reqDate;
    
    try {
        const {data} = api.get(`/api/products/color=${colors}&sizes=${sizes}&minPrice=${minPrice}
        &maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}
        &sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        dispatch({type:FIND_PRODUCT_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCT_FAILURE, payload:error.message})
    }
}

export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const {productId} = reqDate;
    try {
        const {data} = api.get(`/api/products/id/${productId}`)
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload:error.message})
    }
}