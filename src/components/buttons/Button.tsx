import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes, MouseEvent, ReactNode, Suspense } from 'react';

interface ButtonProps {
  isLoading?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
}

const Button = ({
  isLoading = false,
  onClick,
  type = 'button',
  children,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <DefaultButton type={type} onClick={onClick} {...props}>
      <Suspense>{isLoading ? '로딩중...' : children}</Suspense>
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
