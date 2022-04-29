import styled from 'styled-components';

const Wrapper = styled.ul`
	padding: 0.2rem;
	margin-top: 0.5rem;
	border-bottom: 1px solid var(--white);
	text-align: center;
`;

const Span = styled.span`
	color: ${({ playedBefore }) => (playedBefore ? 'darkgray' : null)};
	margin-left: 1rem;

	&:hover {
		color: pink;
		cursor: pointer;
	}
`;

export { Wrapper, Span };
