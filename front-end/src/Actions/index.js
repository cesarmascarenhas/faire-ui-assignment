export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SEARCHING = 'SEARCHING';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const ADD_BRANDS = 'ADD_BRANDS';
export const CATEGORY_AT = 'CATEGORY_AT';

export const fetchCategories = (categories) => {
    return {
        type:FETCH_CATEGORIES,
        categories
    }
}

export const searchWithFilter = (result) => {
    return {
        type:SEARCHING,
        result
    }
}

export const fetchProducts = (products) => {
    
    return {
        type:ADD_PRODUCTS,
        products
    }
}

export const fetchBrands = (brands) => {
    return {
        type:ADD_BRANDS,
        brands
    }
}

export const setCategory = (category) => {
    return {
        type:CATEGORY_AT,
        category
    }
}