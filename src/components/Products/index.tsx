import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { products } from '../../services/products';
import { ModalProps } from '../../@types';
import CardProduct from '../CardProduct';

export default function Products({ setShowModal }: ModalProps) {
	const [searchValue, setSearchValue] = useState('');
	const [productsList, setProductsList] = useState(products);

	const cancelOrder = () => {
		localStorage.setItem('products', '[]');
		window.location.reload();
	};

	useEffect(() => {
		const newProductList = productsList.filter(product =>
			product.name.toLowerCase().includes(searchValue.toLowerCase()),
		);

		setProductsList(newProductList);
		if (searchValue === '') setProductsList(products);
	}, [searchValue]);

	return (
		<S.SContainer>
			<div>
				<h1>Seja bem-vindo(a)!</h1>
				<S.SInput
					type="text"
					name="busca"
					id="busca"
					placeholder="O que você procura?"
					value={searchValue}
					onChange={event => setSearchValue(event.target.value)}
				/>
			</div>
			<div>
				<h3>Produtos</h3>
				<p>Selecione um produto para adicionar ao seu pedido.</p>
				<S.SGridContainer>
					{productsList.map(product => (
						<CardProduct
							id={product.id}
							name={product.name}
							description={product.description}
							price={product.price}
							image={product.image}
						/>
					))}
				</S.SGridContainer>
			</div>
			<div className="buttonContainer">
				<S.SButton color="#fff" type="button" onClick={cancelOrder}>
					Cancelar
				</S.SButton>
				<S.SButton
					color="#9F9F9F"
					type="button"
					onClick={() => setShowModal(true)}
				>
					Revisar pedido
				</S.SButton>
			</div>
		</S.SContainer>
	);
}
