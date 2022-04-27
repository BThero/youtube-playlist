import styled from 'styled-components';

const Input = styled.input`
	margin-left: 0.5rem;
	background-color: var(--black);
	border: 1px dotted var(--white);

	&:focus {
		outline: none;
		border-color: pink;
	}
`;

const Button = styled.button`
	margin-left: 0.5rem;
	background-color: var(--black);
	border: 1px solid var(--white);

	&:hover {
		color: pink;
		border-color: pink;
	}
`;

export { Input, Button };
