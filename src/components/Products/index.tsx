import React from 'react';
import * as S from './styled';

export default function Products() {
	return (
		<S.SContainer>
			<div>
				<h1>Seja bem-vindo(a)!</h1>
				<input type="text" name="" id="" />
			</div>
			<div>
				<h4>Produtos</h4>
				<p>Selecione um produto para adicionar ao seu pedido.</p>
				<S.SGridContainer>
					<div>Products</div>
					<div>Products</div>
					<div>Products</div>
					<div>Products</div>
					<div>Products</div>
					<div>Products</div>
					<div>Products</div>
					<div>Products</div>
					<div>Products</div>
					<div>Products</div>
					<div>Products</div>
					<div>Products</div>
				</S.SGridContainer>
			</div>
			<div className="buttonContainer">
				<button type="button">Products</button>
				<button type="button">Products</button>
			</div>
		</S.SContainer>
	);
}
