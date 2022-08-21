import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { ChildrenProps } from '../types';

export default function ScrollToTop({ children }: ChildrenProps) {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return <>{children}</>;
}
