import React from 'react';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class Dashboard extends React.Component {
    render() {
        //console.log(this.props);
        const { products, cookies } = this.props;
        return (
            <div className="container mt-5">
                <br />
                <ProductList  products={products} cookies={cookies} />
            </div>
        )
    }
}

const mapStatesToProps = (state) => {
    console.log(state)
    return {
        products: state.firestore.ordered.products !== undefined ? state.firestore.ordered.products : []
    }
}

export default compose(
    connect(mapStatesToProps),
    firestoreConnect([
        { collection: 'products' }
    ])
)(Dashboard);