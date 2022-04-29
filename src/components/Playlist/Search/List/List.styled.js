import styled from 'styled-components';

const UL = styled.ul`
	list-style-type: none;
	max-height: 400px;
	overflow: scroll;
	padding: 1rem;
	border: 1px solid var(--white);
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

const Thumbnail = styled.img`
	height: 150px;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export { UL, LI, Wrapper, Thumbnail };
