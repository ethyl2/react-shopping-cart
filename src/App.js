import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext  } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = item => {
		//console.log("Time to remove item");
		//console.log(item.id);
		// remove the given item from the cart
		setCart(cart.filter(cartItem => cartItem.id !== item.id));
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem, removeItem}} >
				<CartContext.Provider value={cart} >
				<Navigation />

				{/* Routes */}
				<Route
					exact
					path="/"
					component={Products}
				/>

				<Route
					path="/cart"
					component={ShoppingCart}
				/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
