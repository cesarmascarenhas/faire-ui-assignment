import * as CONSTANTS from '../Actions'
import { combineReducers } from 'redux';

export const categories = (categories=[],actions) => {
    
    switch(actions.type){
        case CONSTANTS.FETCH_CATEGORIES:
            return actions.categories;            
        default:
        return categories;
    }

}

export const search = (result={},actions) => {

    switch(actions.type){
        case CONSTANTS.SEARCHING:
            return actions.result           
        default:
        return result;
    }

}

export const brands = (brands=[],actions) => {

    switch(actions.type){
        case CONSTANTS.ADD_BRANDS:
            return actions.brands          
        default:
        return brands;
    }
    
}

export const products = (products=[],actions) => {

    switch(actions.type){
        case CONSTANTS.ADD_PRODUCTS:
            return actions.products
        default:
        return products;
    }
    
}

export const category = (category='New',actions) => {

    switch(actions.type){
        case CONSTANTS.CATEGORY_AT:
            return actions.category
        default:
        return category;
    }
    
}

export default combineReducers({
    categories,
    search,
    brands,
    products,
    category
})

