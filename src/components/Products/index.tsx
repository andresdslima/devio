import React, { useState } from 'react';
import * as S from './styled';
import bigMac from '../../assets/images/bigMac.png';
import { products } from '../../services/products';

export default function Products() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<S.SContainer>
				<div>
					<h1>Seja bem-vindo(a)!</h1>
					<S.SInput
						type="text"
						name="busca"
						id="busca"
						placeholder="O que você procura?"
					/>
				</div>
				<div>
					<h3>Produtos</h3>
					<p>Selecione um produto para adicionar ao seu pedido.</p>
					<S.SGridContainer>
						{products.map(product => (
							<div key={product.id}>
								<img src={bigMac} alt={product.name} />
								<h4>{product.name}</h4>
								<small>
									<em>{product.description}</em>
								</small>
								<strong>R${product.price}</strong>
							</div>
						))}
					</S.SGridContainer>
				</div>
				<div className="buttonContainer">
					<S.SButton color="#fff" type="button">
						Cancelar
					</S.SButton>
					<S.SButton color="#9F9F9F" type="button">
						Finalizar Pedido
					</S.SButton>
				</div>
			</S.SContainer>
			{showModal && (
				<div>
					<div>
						<h2>Revise seu pedido</h2>
					</div>
				</div>
			)}
		</>
	);
}
