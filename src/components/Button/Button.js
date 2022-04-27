import React from 'react';
import * as S from './Button.styled';

const Button = ({ type, text, onClick, alarm, ...props }) => {
	return (
		<S.Button alarm={alarm} type={type} onClick={onClick} {...props}>
			{text}
		</S.Button>
	);
};

export default Button;
