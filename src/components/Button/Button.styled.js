import styled, { css } from 'styled-components';

const Button = styled.button`
	background-color: var(--black);

	${({ alarm }) =>
		alarm
			? css`
					border: 1px solid var(--red);
					color: red;
			  `
			: css`
					border: 1px solid var(--white);
			  `}

	padding: 0.25rem;
	border-radius: 0.5rem;

	&:hover {
		color: pink;
		border-color: pink;
	}

	&[disabled] {
		color: gray !important;
		border-color: gray !important;
	}
`;

export { Button };
