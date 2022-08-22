import styled from 'styled-components';
import { Container, Modal } from 'react-bootstrap';

export const SContainer = styled(Container)`
	padding: 5rem 15rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-color: #9f9f9f;
	opacity: 0.9;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
`;

export const SSubcontainer = styled.div`
	background-color: #fff;
	opacity: 1;
	border-radius: 0.5rem;
	padding: 2rem;
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

	img {
		width: 15%;
	}

	div {
		&.order-item {
			display: flex;
			gap: 0;
			justify-content: space-between;
			align-items: center;

			& > div {
				display: flex;
				flex-direction: column;
			}
		}
	}
`;

export const SDivModal = styled(Modal)`
	padding: 5rem 15rem !important;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-color: #9f9f9f;
	opacity: 0.9;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	overflow-y: scroll;

	/* .modal-content {
	.modal-body {
		margin-top: -3rem;
		margin-bottom: 0;
		overflow: hidden;
	}
	.btn-close {
		font-size: 12px;
	}
	.btn-close:focus {
		outline: 0;
		box-shadow: none;
	}
	@media (max-width: 800px) {
		width: 100%;
	} */
`;
