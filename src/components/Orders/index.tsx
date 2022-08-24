import React from 'react';
import { useSelector } from 'react-redux';
import { PersistedReducerProps } from '../../@types';
import * as S from './styled';

export default function OrderList() {
	const allOrders = useSelector(
		(state: PersistedReducerProps) => state.persistedReducer.allOrders,
	);

	return (
		<S.SContainer>
			<S.SDiv border="3px solid #000">
				<h2>Preparando:</h2>
				{allOrders.map(orderArray => {
					const order = orderArray[orderArray.length - 1];

					if (order.status === 'pending') {
						return <h1 key={order.id}>{order.client}</h1>;
					}

					return null;
				})}
			</S.SDiv>
			<div className="order-ready">
				<h2>Pronto:</h2>
				{allOrders.map(orderArray => {
					const order = orderArray[orderArray.length - 1];

					if (order.status === 'ready') {
						return <h1 key={order.id}>{order.client}</h1>;
					}

					return null;
				})}
			</div>
		</S.SContainer>
	);
}
