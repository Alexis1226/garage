import styled from '@emotion/styled';
import React, { MouseEvent, ReactNode } from 'react';

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
}

const RoundButton: React.FC<ButtonProps> = ({ onClick, type = 'button', children }) => {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default RoundButton;

const Button = styled.button`
  width: 172px;
  height: 88px;
  border-radius: 20px;
  padding: 22px 11px 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
`;
