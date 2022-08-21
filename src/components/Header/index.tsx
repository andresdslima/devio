import React from 'react';
import * as S from './styled';
import logo from '../../assets/images/logo.jpg';

export default function Header() {
	return (
		<S.SContainer>
			<S.SLogo src={logo} alt="Logo" />
			<nav>
				<S.SLink active to="/">
					Pedidos
				</S.SLink>
				<S.SLink to="/">Cozinha</S.SLink>
				<S.SLink to="/">Retirada</S.SLink>
			</nav>
		</S.SContainer>
	);
}
