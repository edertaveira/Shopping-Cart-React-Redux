import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { removeFromCart, addToCart, getProducts } from '../store/actions/cartActions';


class Cart extends React.Component {

    constructor(props) {
        super(props)
        this.props.get(this.props.cookies);
        this.state = {
            modal: false,
            backdrop: true
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        //console.log(this.props);
        const { cookies, remove, add, products } = this.props;
        let totalAmount = 0;
        products.map(element => {
            totalAmount += (element.product.price * element.amount);
        })
        return (
            <div className="container mt-5">
                <br />
                <h2>
                    Cart
                </h2>
                {products !== undefined && products.length > 0
                    ?
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th className="text-center">Amount</th>
                                <th className="text-right">Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.sort((a, b) => {
                                if (a.product.title < b.product.title) { return -1; }
                                if (a.product.title > b.product.title) { return 1; }
                                return 0;
                            }).map(element => {
                                return (
                                    <tr key={element.product.id}>
                                        <th><img src={element.product.image} style={{ width: '20px' }} /></th>
                                        <td>{element.product.title}</td>
                                        <td className="text-center">
                                            {element.amount}
                                        </td>
                                        <td className="text-right">${element.product.price * element.amount}</td>
                                        <td>
                                            <Button size="xs" onClick={(e) => remove(element, cookies)} color="link">
                                                {element.amount === 1 && <i className="fas fa-trash-alt"></i>}
                                                {element.amount > 1 && <i className="fas fa-minus"></i>}
                                            </Button>
                                            <Button size="xs" onClick={(e) => add(element.product, cookies)} color="link"><i className="fas fa-plus"></i></Button>
                                        </td>
                                    </tr>
                                )
                            })}

                            <tr>
                                <th colSpan="3" className="text-right"><b>Sub Total</b></th>
                                <th className="text-right">
                                    ${totalAmount.toFixed(2)}

                                </th>
                                <th></th>
                            </tr>
                        </tbody>
                    </Table>
                    :
                    <Alert color="primary"> Cart is Empyt! :( </Alert>
                }

                <Button onClick={this.toggle} color="success">Checkout</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="sm" backdrop={'static'}>
                    <ModalHeader toggle={this.toggle}>Thanks for it!</ModalHeader>
                    <ModalBody>
                        It is just a example made by <i>Eder Taveira</i>, but it can to be integrated with the any payment gateway.
                     </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}


const mapsStateToProps = (state, ownProps) => {
    return {
        products: state.cart.products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        remove: (product, cookies) => dispatch(removeFromCart(product, cookies)),
        add: (product, cookies) => dispatch(addToCart(product, cookies)),
        get: (cookies) => dispatch(getProducts(cookies))
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(Cart);