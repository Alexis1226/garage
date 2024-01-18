import styled from '@emotion/styled';
import { Product } from '../../../types/products';
import Counter from './Counter';
import { useCartStore } from '../../../zustand/cart';
import { useState } from 'react';

const Item = ({ resource }: { resource: Product }) => {
  const { id, name, event, price } = resource;
  const [inCart, setIsinCart] = useState(false);

  // cart store suscriibe
  useCartStore.subscribe((state) => {
    setIsinCart(!!state.cart[id]);
  });

  return (
    <ItemSection exist={inCart}>
      <SquareSpace></SquareSpace>
      <ContentContainer>
        <ItemUpperSide>
          <span>{name}</span>
          {!!event && <Badge>이벤트</Badge>}
        </ItemUpperSide>
        <ItemLowerSide>
          <Counter id={id} />
          <span>{price.toLocaleString('ko-KR')}원</span>
        </ItemLowerSide>
      </ContentContainer>
    </ItemSection>
  );
};

export default Item;

const ItemSection = styled.div<{ exist: boolean }>`
  width: 100%;
  height: 80px;
  display: flex;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: ${(props) => (props.exist ? 'rgba(247, 90, 47, 0.10)' : 'white')};
  padding: 8px 12px;
  margin-top: 18px;
`;

const SquareSpace = styled.div`
  aspect-ratio: 1;
  height: 100%;
  background: #d9d9d9;
  margin-right: 8px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const ItemUpperSide = styled.div`
  display: flex;
  width: 100%;
`;

const ItemLowerSide = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Badge = styled.div`
  width: 53px;
  height: 23px;
  border-radius: 10px;
  background: #f75a2f;
  color: white;
  font-size: 13px;
  line-height: 22px;
  text-align: center;
  margin-left: 8px;
`;
