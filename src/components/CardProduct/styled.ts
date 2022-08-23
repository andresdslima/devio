import styled from 'styled-components';

export const SCardProduct = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 250px;
	border-radius: 0.5rem;
	background-color: #fdfdfd;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-in-out;
	border: 2px solid transparent;
	filter: grayscale(100%);

	&.active {
		filter: grayscale(0%);
		border: 2px solid #125c13;
	}

	img {
		width: 50%;
	}

	&:hover {
		filter: grayscale(0%);
		cursor: pointer;
		transform: scale(1.1);
		border: 2px solid #125c13;
	}

	@media (min-width: 2000px) {
		width: 400px;
		height: 500px;
	}

	@media (max-width: 768px) {
		filter: grayscale(0%);
	}

	@media (max-width: 425px) {
		width: 150px;
		height: 200px;

		img {
			width: 40%;
		}
	}
`;
