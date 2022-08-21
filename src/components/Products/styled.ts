import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const SContainer = styled(Container)`
	padding: 2rem 7.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;

	div {
		&.buttonContainer {
			display: flex;
			justify-content: flex-end;
		}
	}

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

export const SGridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	grid-gap: 3rem;
	width: 100%;
	margin: 1rem auto;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		/* height: 100%; */
		border-radius: 0.5rem;
		background-color: #fdfdfd;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease-in-out;

		&:hover {
			cursor: pointer;
			transform: scale(1.1);
		}
	}
`;
