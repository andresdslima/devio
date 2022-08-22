import React from 'react';
import { Modal } from 'react-bootstrap';
import { ModalProps, ProductProps } from '../../types';
import * as S from './styled';

export default function ModalProducts({ showModal, setShowModal }: ModalProps) {
	const handleClose = () => setShowModal(false);

	const products: ProductProps[] | [] = JSON.parse(
		localStorage.getItem('products') || `[]`,
	);

	return (
		<S.SDivModal show={showModal} onHide={handleClose} centered>
			<S.SSubcontainer>
				<Modal.Header closeButton>
					<h2>Revise seu pedido</h2>
				</Modal.Header>
				<Modal.Body>
					{products.length === 0 && (
						<h4>Ainda não há nenhum item no seu pedido.</h4>
					)}
					{products.length !== 0 &&
						products.map(product => (
							<div className="order-item" key={product.id}>
								<img src={product.image} alt={product.name} />
								<div>
									<h4>{product.name}</h4>
									<small>
										<em>{product.description}</em>
									</small>
									<div>
										<button type="button">-</button>
										<button type="button">+</button>
									</div>
								</div>
								<strong>R${product.price}</strong>
							</div>
						))}
				</Modal.Body>
				<div>
					<textarea
						name="comment"
						id="comment"
						cols={30}
						rows={10}
						placeholder="Observações"
					/>
				</div>
				<div>
					<h1>final</h1>
				</div>
				<Modal.Footer>
					<button type="button">Adicionar mais itens</button>
					<button type="button">Finalizar pedido</button>
				</Modal.Footer>
			</S.SSubcontainer>
		</S.SDivModal>
	);
}
