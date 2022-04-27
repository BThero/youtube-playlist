import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: stretch;
	padding: 1rem;
`;

const Input = styled.input`
	font-size: 20px;
	padding: 0.5rem;
	border: 2px solid var(--white);
	border-right-width: 1px;
	border-top-left-radius: 1rem;
	border-bottom-left-radius: 1rem;
	background-color: var(--black);

	&:focus {
		outline: none;
		color: pink;
	}
`;

const Button = styled.button`
	font-size: 20px;
	background-color: var(--black);
	padding: 0.5rem;
	border: 2px solid var(--white);
	border-left-width: 1px;
	border-top-right-radius: 1rem;
	border-bottom-right-radius: 1rem;
	&:hover {
		color: pink;
		cursor: pointer;
	}
`;

export { Form, Input, Button };
