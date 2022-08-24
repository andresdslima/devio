import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styled';
import { ProductProps } from '../../@types';
import { setMyOrder } from '../../store/modules/products';

export default function CardProduct({
	id,
	name,
	description,
	price,
	image,
	isActive,
}: ProductProps) {
	const dispatch = useDispatch();
	const [isSelected, setIsSelected] = useState(false);

	const getMyOrder = () => {
		return JSON.parse(localStorage.getItem('products') || `[]`);
	};

	const addItem = (selectedProduct: ProductProps) => {
		const myOrder = getMyOrder();

		localStorage.setItem(
			'products',
			JSON.stringify([...myOrder, selectedProduct]),
		);

		dispatch(setMyOrder([selectedProduct]));
	};

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<S.SCardProduct
			key={id}
			onClick={() => {
				addItem({ id, name, description, price, image });
				setIsSelected(true);
			}}
			isActive={`${isSelected || isActive}`}
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
