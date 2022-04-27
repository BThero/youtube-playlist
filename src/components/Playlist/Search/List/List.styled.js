import styled from 'styled-components';

const UL = styled.ul`
	list-style-type: none;
`;

const LI = styled.li`
	padding: 0.5rem;
	border: 1px solid var(--white);

	& * {
		color: inherit;
	}

	&:hover {
		color: pink;
		border-color: pink;
		cursor: pointer;
	}
`;

export { UL, LI };
