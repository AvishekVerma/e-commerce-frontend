import { api } from "../../config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCT_REQUEST})
    const { colors, sizes, minPrice, maxPrice, minDiscount, 
        category, stock, sort, pageNumber, pageSize } = reqData;
    
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
    const {productId} = reqData;
    try {
        const {data} = api.get(`/api/products/id/${productId}`)
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload:error.message})
    }
}

export const createProduct = (product) => async (dispatch) => {
    dispatch({type:CREATE_PRODUCT_REQUEST})
    try {
        const {data} = api.post(`/api/admin/products`, product)
        dispatch({type:CREATE_PRODUCT_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:CREATE_PRODUCT_FAILURE, payload:error.message})
    }
}

export const deleteProduct = (reqData) => async (dispatch) => {
    dispatch({type:DELETE_PRODUCT_REQUEST})
    const {productId} = reqData;
    try {
        const {data} = api.delete(`/api/products/${productId}/delete`)
        dispatch({type:DELETE_PRODUCT_SUCCESS, payload:productId})
    } catch (error) {
        dispatch({type:DELETE_PRODUCT_FAILURE, payload:error.message})
    }
}
