import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { connect } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';


class Product extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { product, cookies, addToCart } = this.props;
        return (
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 product">
                <Card>
                    <CardImg top width="100%" src={product.image} alt="Card image cap" />
                    <div className='cover'>
                        <Button onClick={(e) => addToCart(product, cookies)} size="xs" color="success"><i className="fas fa-cart-plus"></i> Add to Cart</Button>
                        <p className="text-center">${product.price}</p>
                    </div>
                    <CardBody>
                        <CardTitle>{product.title}</CardTitle>
                        <CardSubtitle>${product.price}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product, cookies) => dispatch(addToCart(product, cookies))
    }
}

export default connect(null, mapDispatchToProps)(Product);