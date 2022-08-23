import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Kitchen from './pages/Kitchen';
import Orders from './pages/Orders';
import Payment from './pages/Payment';

export default function AppRoutes(): JSX.Element {
	return (
		<Router>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cozinha" element={<Kitchen />} />
					<Route path="/retirada" element={<Orders />} />
					<Route path="/pagamento" element={<Payment />} />
				</Routes>
			</ScrollToTop>
		</Router>
	);
}
