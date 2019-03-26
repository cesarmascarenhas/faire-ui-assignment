export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SEARCHING = 'SEARCHING';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const ADD_BRANDS = 'ADD_BRANDS';
export const PAGINATE = 'PAGINATE';
export const LOADING = 'LOADING'

export const loading = (loading) => {
    return {
        type:LOADING,
        loading
    }
}

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

export const setPagination = (page,total,category) => {
    return{
        type:PAGINATE,
        page, 
        total,
        category
    }
}
