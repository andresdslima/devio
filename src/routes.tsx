import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

export default function AppRoutes(): JSX.Element {
	return (
		<Router>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cozinha" element={<Home />} />
					<Route path="/retirada" element={<Home />} />
				</Routes>
			</ScrollToTop>
		</Router>
	);
}
