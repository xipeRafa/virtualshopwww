import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import Modal from 'react-modal';

const Cart = ({ items, total, currency, removeFromCart }) => {


    let iva = total * 0.16
    let totalIva = total+iva

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() { setIsOpen(true) }
    function closeModal() { setIsOpen(false) }
    
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart border p-3 bg-white">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && ( 
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total mb-2 mt-4">
                            <span className="text-muted">Precio: </span> {total} {currency}
                        </div>
                        <div className="cart__total mb-2">
                            <span className="text-muted">Iva: </span> {iva.toFixed(2)} {currency}
                        </div>
                        <div className="cart__total">
                            <span className="text-muted">Total: </span> {totalIva.toFixed(2)} {currency}
                        </div>
                    </div>

                    <button onClick={openModal} className="btn btn-primary comprar mt-3">Comprar</button>
                </div>
            </div>
            <div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        style={{width: '1000vh', transform:'translate(-50%, -50%)'}}>
                        
                        <button className="btn btn-danger" onClick={closeModal}>close</button>

                        <div className="panel-body mt-5 p-5">
                            {items.length > 0 && (
                                <div className="cart__body">
                                    {items.map(item => (
                                        <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                    ))}
                                </div>
                            )}
                            {items.length === 0 && (
                                <div className="alert alert-info">Cart is empty</div>
                            )}
                            <div className="cart__total mb-2 mt-4">
                                <span className="text-muted">Precio: </span> {total} {currency}
                            </div>
                            <div className="cart__total mb-2">
                                <span className="text-muted">Iva : </span> {iva.toFixed(2)} {currency}
                            </div>
                            <div className="cart__total">
                                <span className="text-muted">Total: </span> {totalIva.toFixed(2)} {currency}
                            </div>
                        </div>
                            
                        <button className='btn btn-primary border w-50'>Pagar</button>
                    </Modal>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
