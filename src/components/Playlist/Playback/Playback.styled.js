import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
`;

const Nav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	align-self: stretch;
	margin-top: 1rem;
`;

const Button = styled.button`
	background-color: var(--black);
	border: 1px solid var(--white);
	padding: 0.25rem;

	&:hover {
		color: pink;
		border-color: pink;
	}
`;

export { Wrapper, Button, Nav };
