import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

const Counter = ({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const number = (event.target as HTMLInputElement).value;
    setCount(Number(number));
  };

  const handleDecrease = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };
  const handleIncrease = () => {
    if (count < 999) setCount((prev) => prev + 1);
  };

  return (
    <CounterSection>
      <button onClick={handleDecrease}>-</button>
      <input type="number" value={count} min="0" max="999" onChange={onChange} />
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
