import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {

        const { name, price, currency, image, isInCart } = this.props;

        let iva = price * 0.16
        let priceIva = price+iva
        
        return (
            <div className="product thumbnail bg-white">
                <img src={image} alt="product" className='w-75'/>
                <div className="caption">
                    <h3>{name}</h3>

                    <div className="cart__price">price: {price} {currency}  </div>
                    <div className="cart__price"> iva : {iva.toFixed(3)} {currency} </div>
                    <div className="cart__price">total: {priceIva.toFixed(2)} {currency} </div>

                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger m-3' : 'btn btn-primary m-3'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;