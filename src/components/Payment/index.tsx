import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { GiWallet } from 'react-icons/gi';
import { AiFillCreditCard } from 'react-icons/ai';
import { BsCashCoin } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styled';
import { deleteMyOrder, setAllOrders } from '../../store/modules/products';
import { PersistedReducerProps, ProductProps } from '../../@types';

export default function PaymentComponent() {
	// We can also use the lib "formik" as well.
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [client, setClient] = useState('');
	const [comment, setComment] = useState('');
	const [change, setChange] = useState(0);
	const [paidValue, setPaidValue] = useState(0);
	const [payment, setPayment] = useState('Dinheiro');

	const allOrders = useSelector(
		(state: PersistedReducerProps) => state.persistedReducer.allOrders,
	);

	const products: ProductProps[] | [] = JSON.parse(
		localStorage.getItem('products') || `[]`,
	);

	const cancelOrder = () => {
		localStorage.setItem('products', '[]');
		dispatch(deleteMyOrder());
		navigate('/');
	};

	const finishOrder = () => {
		// eslint-disable-next-line no-alert
		alert(
			'Pedido cadastrado com sucesso!\nSeu pedido foi encaminhado para a cozinha.',
		);

		localStorage.setItem('products', '[]');
		window.print();
		navigate('/');
	};

	const getTotal = () => {
		const prices = products.map(product => product.price);
		const total = prices.reduce((acc: number, price: string) => {
			return acc + parseInt(price, 10);
		}, 0);

		return total;
	};

	const calculateChange = () => {
		const total = getTotal();
		const changeValue = paidValue - total;

		setChange(changeValue);
	};

	const handleSubmit = () => {
		if (getTotal() === 0) {
			// eslint-disable-next-line no-alert
			alert('Por favor, adicione algum produto ao pedido!');
			return;
		}

		if (client === '' || (payment === 'Dinheiro' && paidValue === 0)) {
			// eslint-disable-next-line no-alert
			alert('Por favor, preencha todos os campos corretamente!');
			return;
		}

		const newProducts = [
			...products,
			{
				id: allOrders.length + 1,
				client,
				comment,
				payment,
				change,
				total: getTotal(),
				status: 'pending',
			},
		];

		dispatch(setAllOrders(newProducts));
		dispatch(deleteMyOrder());
		finishOrder();
	};

	useEffect(() => {
		calculateChange();
	}, [paidValue]);

	return (
		<S.SContainer>
			<div>
				<GiWallet size={30} />
				<h1>Pagamento</h1>
			</div>
			<S.SPaymentContainer>
				<div>
					<h4>Resumo da compra</h4>
					<S.STotalContainer>
						{products.length !== 0 &&
							products.map(product => (
								<div key={product.id}>
									<em>{product.name}</em>
									<em>R${product.price}</em>
								</div>
							))}
						<hr />
						<span>Total do pedido:</span>
						<h2>R${getTotal()},00</h2>
					</S.STotalContainer>
					<h4>Nome do cliente</h4>
					<S.SInput
						type="text"
						name="client"
						id="client"
						placeholder="Primeiro e último nome"
						value={client}
						onChange={event => setClient(event.target.value)}
					/>
					<h4>Observações</h4>
					<textarea
						name="comment"
						id="comment"
						rows={5}
						placeholder="Observações"
						value={comment}
						onChange={event => setComment(event.target.value)}
					/>
				</div>
				<form onSubmit={handleSubmit}>
					<h4>Selecione a forma de pagamento</h4>
					<S.SPaymentContainer className="mobile">
						<div>
							<AiFillCreditCard size={30} />
							<label htmlFor="debit">
								<strong>
									<em>Débito</em>
								</strong>
							</label>
						</div>
						<input
							type="radio"
							name="payment"
							id="debit"
							value="Debito"
							// onChange={event => setPayment(event.target.value)}
							onClick={() => setPayment('Debito')}
						/>
					</S.SPaymentContainer>
					<S.SPaymentContainer className="mobile">
						<div>
							<AiFillCreditCard size={30} />
							<label htmlFor="credit">
								<strong>
									<em>Crédito</em>
								</strong>
							</label>
						</div>
						<input
							type="radio"
							name="payment"
							id="credit"
							value="Credito"
							// onChange={event => setPayment(event.target.value)}
							onClick={() => setPayment('Credito')}
						/>
					</S.SPaymentContainer>
					<S.SPaymentContainer className="mobile">
						<div>
							<BsCashCoin size={30} />
							<label htmlFor="cash">
								<strong>
									<em>Dinheiro</em>
								</strong>
							</label>
						</div>
						<input
							type="radio"
							name="payment"
							id="cash"
							value="Dinheiro"
							onClick={() => setPayment('Dinheiro')}
							defaultChecked
						/>
					</S.SPaymentContainer>
					<S.SChangeContainer>
						<div>
							<h4>Valor entregue</h4>
							<S.SInput
								type="number"
								name="valor-entregue"
								id="valor-entregue"
								value={paidValue}
								onChange={event =>
									setPaidValue(parseInt(event.target.value, 10))
								}
							/>
						</div>
						<div>
							<h4>Troco</h4>
							<S.SInput
								type="text"
								name="troco"
								id="troco"
								value={`R$${
									change < 0 || Number.isNaN(change) ? 0 : change
								},00`}
								onChange={calculateChange}
							/>
						</div>
					</S.SChangeContainer>
				</form>
			</S.SPaymentContainer>
			<S.SButtonContainer>
				<S.SButton color="#fff" type="button" onClick={cancelOrder}>
					Cancelar pedido
				</S.SButton>
				<S.SButton color="#125c13" type="submit" onClick={handleSubmit}>
					Finalizar pedido
				</S.SButton>
			</S.SButtonContainer>
		</S.SContainer>
	);
}
