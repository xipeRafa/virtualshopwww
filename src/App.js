import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import Login from './components/Login/Login';


const App = () => {
    return (
        <div className="container">
            <div className="row bg-secondary mb-4">
                <div className="col-sm-4">
                    <h1 className='text-white'>Virtual Shoop</h1>
                </div>
                <div className="col-sm-8">
                   <h3><Login /></h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <small>
                    powered by <a href="http://www.kikoya.mx/">Kikoya</a>
                </small>
            </footer>
        </div>
    );
}

export default App;
