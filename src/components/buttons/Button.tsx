import styled from '@emotion/styled';
import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';

interface ButtonProps {
  disabled: boolean;
  isLoading?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
}

const Button = ({
  disabled = false,
  isLoading = false,
  onClick,
  type = 'button',
  children,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <DefaultButton type={type} onClick={onClick} {...props} disabled={isLoading || disabled}>
      {isLoading ? '로딩중...' : children}
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
