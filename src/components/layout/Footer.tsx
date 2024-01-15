import styled from '@emotion/styled';
import React from 'react';
import Button from '../buttons/Button';

const Footer = () => {
  return (
    <FixedBottomSection>
      <TextDiv>
        <span>총 수량 : 0개</span>
        <span>총 가격 : 0원</span>
      </TextDiv>
      <Button>주문하기</Button>
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
