const CART = '_CART_'
export const addToCart = (product, cookies) => {

    return (dispatch, getState) => {
        let products = [];
        if (cookies.get(CART) !== undefined) {
            products = cookies.get(CART);
            let productsCheck = products.filter(elem => elem.product.id === product.id);
            let cartProduct;
            cartProduct = { amount: 1, product: product };
            if (productsCheck.length > 0) {
                cartProduct = { amount: productsCheck[0].amount + 1, product: product };
                products.splice(products.indexOf(productsCheck[0]), 1);
            }
            products.push(cartProduct);
        } else {
            let cartProduct = { amount: 1, product: product };
            products.push(cartProduct);
        }
        cookies.set(CART, products, { path: '/' });
        dispatch({ type: 'ADD_TO_CART', products });
    }
};

export const removeFromCart = (element, cookies) => {
    return (dispatch, getState) => {
        let products = [];
        if (cookies.get(CART) !== undefined) {
            products = cookies.get(CART);
            let productsCheck = products.filter(elem => elem.product.id === element.product.id);
            console.log(element.product);
            if (productsCheck.length > 0) {
                console.log(productsCheck[0].amount);
                products.splice(products.indexOf(productsCheck[0]), 1);
                if (productsCheck[0].amount == 1) {
                } else {
                    let cartProduct = { amount: productsCheck[0].amount - 1, product: element.product };
                    products.push(cartProduct);
                }
                cookies.set(CART, products, { path: '/' });
            }
        }
        dispatch({ type: 'REMOVE_PRODUCT_FROM_CART', products });
    }
};
export const getProducts = (cookies) => {
    return (dispatch, getState) => {
        let products = [];
        if (cookies.get(CART) !== undefined && cookies.get(CART).length > 0) {
            products = cookies.get(CART);
        }
        dispatch({ type: 'GET_PRODUCTS', products });
    }
}