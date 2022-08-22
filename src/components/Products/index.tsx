import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { products } from '../../services/products';
import { ModalProps, ProductProps } from '../../types';

export default function Products({ setShowModal }: ModalProps) {
	const [searchValue, setSearchValue] = useState('');
	const [productsList, setProductsList] = useState(products);

	const getMyOrder = () => {
		return JSON.parse(localStorage.getItem('products') || `[]`);
	};

	const cancelOrder = () => {
		localStorage.setItem('products', '[]');
		window.location.reload();
	};

	const addItem = (product: ProductProps) => {
		const myOrder = getMyOrder();

		if (myOrder.length === 0) {
			localStorage.setItem('products', JSON.stringify([product]));
		} else {
			localStorage.setItem('products', JSON.stringify([...myOrder, product]));
		}
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
						// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
						<div
							key={product.id}
							onClick={event => {
								addItem(product);
								event.currentTarget.classList.add('active');
							}}
						>
							<img src={product.image} alt={product.name} />
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
