const url = 'http://localhost:2526/api'
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

export const fetchInitApp = async () => {     
    return Promise.all(
        [
            fetchCategories(),
            //fetchSearch({category:'New'})
        ]
    )
}


export const fetchCategories = async () => {     
       let categories = await fetch(`${url}/category/new`,{method:'get',headers}).then(resp=>resp.json());
       return  categories;
}

export const fetchProducts = async (token) => {     
    let categories = await fetch(`${url}/brand/${token}/products`,{method:'get',headers}).then(resp=>resp.json());
    return  categories;
}

export const fetchSearch = async (filter) => {     
    let search = await fetch(`${url}/search/makers-with-filters`,{method:'post',headers, body:JSON.stringify(filter)}).then(resp=>resp.json());
    return  search;
}