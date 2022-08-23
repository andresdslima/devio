import React from 'react';
import { useNavigate } from 'react-router';
import { GiWallet } from 'react-icons/gi';
import { AiFillCreditCard } from 'react-icons/ai';
import { BsCashCoin } from 'react-icons/bs';
import * as S from './styled';

export default function PaymentComponent() {
	const navigate = useNavigate();

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
						{/* {products.length !== 0 &&
							products.map(product => (
								<div key={product.id}>
									<em>{product.name}</em>
									<em>R${product.price}</em>
								</div>
							))} */}
						<div>
							<em>Product name</em>
							<em>R$300,0</em>
						</div>
						<div>
							<em>Product name</em>
							<em>R$300,0</em>
						</div>
						<hr />
						<br />
						<div>
							<span>Total do pedido:</span>
							<h2>R$600,00</h2>
						</div>
					</S.STotalContainer>
					<h4>Nome do cliente</h4>
					<S.SInput
						type="text"
						name="client"
						id="client"
						placeholder="Primeiro e último nome"
					/>
				</div>
				<form>
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
						<input type="radio" name="payment" id="debit" value="Debito" />
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
						<input type="radio" name="payment" id="credit" value="Credito" />
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
						<input type="radio" name="payment" id="cash" value="Dinheiro" />
					</S.SPaymentContainer>
					<S.SChangeContainer>
						<div>
							<h4>Valor entregue</h4>
							<S.SInput type="text" name="valor-entregue" id="valor-entregue" />
						</div>
						<div>
							<h4>Troco</h4>
							<S.SInput type="text" name="troco" id="troco" />
						</div>
					</S.SChangeContainer>
				</form>
			</S.SPaymentContainer>
			<S.SButtonContainer>
				<S.SButton
					color="#fff"
					type="button"
					onClick={() => {
						localStorage.setItem('products', '[]');
						navigate('/');
					}}
				>
					Cancelar pedido
				</S.SButton>
				<S.SButton
					color="#125c13"
					type="button"
					onClick={() => {
						// eslint-disable-next-line no-alert
						alert(
							'Pedido cadastrado com sucesso!\nSeu pedido foi encaminhado para a cozinha.',
						);
						localStorage.setItem('products', '[]');
						navigate('/');
					}}
				>
					Finalizar pedido
				</S.SButton>
			</S.SButtonContainer>
		</S.SContainer>
	);
}
