import styled from '@emotion/styled';
import Button from '../buttons/Button';
import { useCartStore } from '../../zustand/cart';
import { useEffect, useState } from 'react';
import { Product } from '../../types/products';

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchdData] = useState<undefined | Product[]>();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const cart = useCartStore((state) => state.cart);
  const resetCart = useCartStore((state) => state.resetCart);

  useEffect(() => {
    let price = 0;
    let count = 0;

    (async () => {
      try {
        const data = await fetch('http://localhost:3001/items').then((res) => res.json());
        setFetchdData(data);
      } catch (error) {
        console.error(error);
      }
    })();
    const cartProduct = fetchedData?.filter((item) => Object.keys(cart).includes(item.id));
    if (cartProduct?.length !== 0) {
      for (const [key, value] of Object.entries(cart)) {
        const theItem = cartProduct?.find((item) => item.id === key);

        price += theItem?.price! * value;
        count += value;
      }
    }
    setTotalPrice(price);
    setTotalCount(count);
  }, [cart, fetchedData]);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      // 결제 API 호출

      setIsLoading(false);
      resetCart();
    }, 2000);
  };

  return (
    <FixedBottomSection>
      <TextDiv>
        <span>총 수량 : {totalCount}개</span>
        <span>총 가격 : {totalPrice.toLocaleString('ko-KR')}원</span>
      </TextDiv>
      <Button isLoading={isLoading} onClick={handleClick} disabled={Object.keys(cart).length === 0}>
        주문하기
      </Button>
    </FixedBottomSection>
  );
};

export default Footer;

const FixedBottomSection = styled.section`
  width: 100vw;
  height: 170px;
  margin-top: auto;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 23px 27px 27px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    background-color: black;
    color: white;
    width: 100%;
    height: 48px;
    font-size: 18px;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 18px;

  & > span {
    height: 26px;
  }
`;
