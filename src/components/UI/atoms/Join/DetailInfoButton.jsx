import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';

const DetailInfoButton = ({ text, select }) => {
  return <Button select={select}>{text}</Button>;
};

const Button = styled.button`
  display: inline-block;
  height: 42px;
  padding: 14px 20px;
  border-radius: 6px;
  border-style: none;

  background-color: ${palette.subNavy};

  color: ${palette.textWhite};
  font-weight: 600;
  font-size: 14px;

  ${({ select }) =>
    select &&
    css`
      border: 0.6px solid ${palette.pointRed};
    `}
`;

export default DetailInfoButton;