import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
}

const Button: React.FC<ButtonProps | ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  type = 'button',
  children,
  ...props
  return (
    <DefaultButton type={type} onClick={onClick} {...props}>
      {children}
    </DefaultButton>
  );
};

export default Button;

const DefaultButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;

  &:disabled,
  &[disabled] {
    background: #c1c1c1;
    color: white;
    cursor: not-allowed;
  }
`;
