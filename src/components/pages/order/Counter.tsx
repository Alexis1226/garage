import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import { useCartStore } from '../../../zustand/cart';

const Counter = ({ id }: { id: string }) => {
  const { cart, addCart, subtractCart } = useCartStore();
  const updateCart = useCartStore((state) => state.updateCart);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const number = parseInt((event.target as HTMLInputElement).value);
    updateCart(id, number);
  };

  const handleDecrease = () => {
    subtractCart(id);
  };

  const handleIncrease = () => {
    addCart(id);
  };

  return (
    <CounterSection>
      <button onClick={handleDecrease}>-</button>
      <input type="number" value={cart[id] ? cart[id] : 0} min="0" max="999" onChange={onChange} />
      <button onClick={handleIncrease}>+</button>
    </CounterSection>
  );
};
export default Counter;

const CounterSection = styled.section`
  & > button,
  input {
    border: none;
    background-color: transparent;
    text-align: center;
    width: fit-content;
    padding: 0;
  }

  /* 인풋박스 안 이너 버튼 제거 */
  input::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;
