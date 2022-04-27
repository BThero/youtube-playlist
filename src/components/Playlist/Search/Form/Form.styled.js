import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 0.5rem;
	margin-top: 1rem;

	& > *:not(:first-child) {
		margin-left: 0.5rem;
	}
`;

export { Form };
