import React from 'react';
import { OrderProps } from '../../@types';
import * as S from './styled';

export default function OrderList() {
	const allOrders: OrderProps[] = [
		{
			id: 1,
			client: 'Lara',
			payment: 'credito',
			total: 110,
			status: 'pending',
		},
		{
			id: 2,
			client: 'Andre',
			comment: 'sem cebola',
			payment: 'dinheiro',
			change: 20,
			total: 130,
			status: 'pending',
		},
		{
			id: 3,
			client: 'Lucas',
			payment: 'dinheiro',
			change: 10,
			total: 190,
			status: 'ready',
		},
	];

	return (
		<S.SContainer>
			<S.SDiv border="3px solid #000">
				<h2>Preparando:</h2>
				{allOrders.map(
					order =>
						order.status === 'pending' && (
							<h1 key={order.id}>{order.client}</h1>
						),
				)}
			</S.SDiv>
			<div className="order-ready">
				<h2>Pronto:</h2>
				{allOrders.map(
					order =>
						order.status === 'ready' && <h1 key={order.id}>{order.client}</h1>,
				)}
			</div>
		</S.SContainer>
	);
}
