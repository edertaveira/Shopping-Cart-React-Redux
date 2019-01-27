


const initState = {
    products: []
}

const cartReducer = (state = initState, actions) => {

    switch (actions.type) {
        case 'ADD_TO_CART':
            console.log('Product add to Cart!');
            return {
                ...state, 
                products: actions.products
            };
        case 'GET_PRODUCTS':
            console.log('Get Products from Cart!');
            return {
                ...state, 
                products: actions.products
            };
        case 'REMOVE_PRODUCT_FROM_CART':
            return {
                ...state, 
                products: actions.products
            };
        default:
            return state;
    }


}

export default cartReducer;