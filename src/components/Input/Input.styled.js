import styled from 'styled-components';

const Input = styled.input`
	padding: 0.25rem;
	border: 1px solid var(--white);
	border-radius: 0.5rem;
	background-color: var(--black);

	&:focus {
		outline: none;
		color: pink;
		border-color: pink;
	}
`;

export { Input };
