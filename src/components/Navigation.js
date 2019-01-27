import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    getAmountCart() {
        const { cookies } = this.props;
        let amount = 0;

        if (cookies.get('_CART_') != undefined) {
            cookies.get('_CART_').forEach(elem => {
                amount = amount + elem.amount;
            });
        }
        return amount;
    }

    render() {
        return (
            <div>
                <Navbar color="light" fixed="top" light expand="md">
                    <Link className="navbar-brand" to="/">BookStore</Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/cart" className='nav-link'>
                                    <i className="fas fa-shopping-cart"></i> Cart
                                    {this.getAmountCart() > 0 && "(" + this.getAmountCart() + ")"}
                                </Link>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}