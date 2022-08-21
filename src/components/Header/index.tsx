import React from 'react';
import * as S from './styled';
import logo from '../../assets/images/logo.jpg';

export default function Header() {
	const path = window.location.pathname;

	return (
		<S.SContainer>
			<S.SLogo src={logo} alt="Logo" />
			<nav>
				<S.SLink active={path === '/'} to="/">
					Pedidos
				</S.SLink>
				<S.SLink active={path === '/cozinha'} to="/cozinha">
					Cozinha
				</S.SLink>
				<S.SLink active={path === '/retirada'} to="/retirada">
					Retirada
				</S.SLink>
			</nav>
		</S.SContainer>
	);
}
