import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styled';
import { products } from '../../services/products';
import { ModalProps, PersistedReducerProps } from '../../@types';
import CardProduct from '../CardProduct';
import { deleteMyOrder } from '../../store/modules/products';

export default function Products({ setShowModal }: ModalProps) {
	const [searchValue, setSearchValue] = useState('');
	const [productsList, setProductsList] = useState(products);
	const dispatch = useDispatch();

	const initialOrder = useSelector(
		(state: PersistedReducerProps) => state.persistedReducer.myOrder,
	);

	const [myOrder, setMyOrder] = useState(initialOrder);

	const cancelOrder = () => {
		localStorage.setItem('products', '[]');
		dispatch(deleteMyOrder());
		window.location.reload();
	};

	const isActive = (id: number) => myOrder.some(product => product.id === id);

	useEffect(() => {
		const newProductList = productsList.filter(product =>
			product.name.toLowerCase().includes(searchValue.toLowerCase()),
		);

		setProductsList(newProductList);
		if (searchValue.length <= 1) setProductsList(products);
	}, [searchValue]);

	useEffect(() => {
		const myOrderReference = JSON.parse(
			localStorage.getItem('products') || `[]`,
		);

		setMyOrder(myOrderReference);
	}, [productsList]);

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
							key={product.id}
							name={product.name}
							description={product.description}
							price={product.price}
							image={product.image}
							isActive={isActive(product.id)}
						/>
					))}
				</S.SGridContainer>
			</div>
			<div className="button-container">
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
