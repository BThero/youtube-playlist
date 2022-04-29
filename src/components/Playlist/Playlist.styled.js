import styled from 'styled-components';

const PlaylistWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ID = styled.span`
	color: pink;
	cursor: pointer;

	&:hover {
		color: #f0dae3;
	}
`;

const TwoCol = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 2fr 1fr;
`;

export { ID, PlaylistWrapper, TwoCol };
