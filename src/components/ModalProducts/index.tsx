import React from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { ModalProps, ProductProps } from '../../@types';
import * as S from './styled';

export default function ModalProducts({ showModal, setShowModal }: ModalProps) {
	const handleClose = () => setShowModal(false);
	const navigate = useNavigate();

	const products: ProductProps[] | [] = JSON.parse(
		localStorage.getItem('products') || `[]`,
	);

	const getTotal = () => {
		const prices = products.map(product => product.price);
		const total = prices.reduce((acc: number, price: string) => {
			return acc + parseInt(price, 10);
		}, 0);

		return total;
	};

	return (
		<S.SDivModal show={showModal} onHide={handleClose} centered>
			<S.SSubcontainer>
				<Modal.Header closeButton>
					<h2>Revise seu pedido</h2>
				</Modal.Header>
				<Modal.Body className="modal-mobile">
					{products.length === 0 && (
						<h4>Ainda não há nenhum item no seu pedido.</h4>
					)}
					{products.length !== 0 &&
						products.map(product => (
							<div className="modal-mobile__item" key={product.id}>
								<img src={product.image} alt={product.name} />
								<div>
									<h4>{product.name}</h4>
									<small>
										<em>{product.description}</em>
									</small>
								</div>
								<strong>R${product.price}</strong>
							</div>
						))}
					<S.SObsContainer>
						<h4>Observações</h4>
						<textarea
							name="comment"
							id="comment"
							rows={5}
							placeholder="Observações"
						/>
					</S.SObsContainer>
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
				</Modal.Body>
				<Modal.Footer className="button-container">
					<S.SButton
						color="#fff"
						type="button"
						onClick={() => setShowModal(false)}
					>
						Continuar adicionando
					</S.SButton>
					<S.SButton
						color="#125c13"
						type="button"
						onClick={() => {
							setShowModal(false);
							// dispatch(
							navigate('/pagamento');
						}}
					>
						Finalizar pedido
					</S.SButton>
				</Modal.Footer>
			</S.SSubcontainer>
		</S.SDivModal>
	);
}
