import React from 'react';
import * as S from './styled';
import { ProductProps } from '../../types';

export default function CardProduct({
	id,
	name,
	description,
	price,
	image,
}: ProductProps) {
	const getMyOrder = () => {
		return JSON.parse(localStorage.getItem('products') || `[]`);
	};

	const addItem = (selectedProduct: ProductProps) => {
		const myOrder = getMyOrder();

		if (myOrder.length === 0) {
			localStorage.setItem('products', JSON.stringify([selectedProduct]));
		} else {
			localStorage.setItem(
				'products',
				JSON.stringify([...myOrder, selectedProduct]),
			);
		}
	};

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<S.SCardProduct
			key={id}
			onClick={event => {
				addItem({ id, name, description, price, image });
				event.currentTarget.classList.add('active');
			}}
		>
			<img src={image} alt={name} />
			<h4>{name}</h4>
			<small>
				<em>{description}</em>
			</small>
			<strong>R${price}</strong>
		</S.SCardProduct>
	);
}
