import styled from 'styled-components';

const App = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
`;

const ButtonText = styled.span`
	color: pink;

	&:hover {
		color: #f0dae3;
		cursor: pointer;
	}
`;

const HR = styled.hr`
	width: 100%;
	margin-top: 0.5rem;
`;

export { App, ButtonText, HR };
