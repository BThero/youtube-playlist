import styled from 'styled-components';

const Form = styled.form`
	margin-top: 1rem;
`;

const Input = styled.input`
	margin-left: 0.5rem;
	background-color: var(--black);
	border: 1px solid var(--white);
	padding: 0.25rem;
	border-radius: 0.5rem;

	&:focus {
		outline: none;
		border-color: pink;
	}
`;

const Button = styled.button`
	margin-left: 0.5rem;
	background-color: var(--black);
	border: 1px solid var(--white);
	padding: 0.25rem;
	border-radius: 0.5rem;

	&:hover {
		color: pink;
		border-color: pink;
	}
`;

export { Form, Input, Button };
