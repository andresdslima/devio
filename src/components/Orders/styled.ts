import styled from 'styled-components';
import { Container } from 'react-bootstrap';

interface DivProps {
	border?: string;
}

export const SContainer = styled(Container)`
	padding: 3rem 7.5rem;
	display: flex;
	justify-content: center;
	width: 100%;
	gap: 2rem;

	& > div {
		width: 100%;
		display: flex;
		flex-direction: column;

		h1 {
			margin: 2rem 0;
			font-size: 4rem;
		}

		&.order-ready {
			margin-left: 4rem;

			h1 {
				color: #125c13;
			}
		}

		h2 {
			font-size: 2rem;
		}
	}
`;

export const SDiv = styled.div<DivProps>`
	border-right: ${props => props.border};

	h1 {
		opacity: 0.8;
		color: #9f9f9f;
	}
`;
