import styled from '@emotion/styled';
import { Product } from '../../../types/products';
import Item from './Item';

const OrderList = ({ fetchedData }: { fetchedData: { read(): Product[] } }) => {
  const data = fetchedData.read();

  return (
    <FlexContainer>
      {data.map((item) => (
        <Item resource={item} key={item.id} />
      ))}
    </FlexContainer>
  );
};

export default OrderList;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;
