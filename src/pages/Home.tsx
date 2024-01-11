import styled from '@emotion/styled';
import { RoundButton } from '../components';
import logoImage from '../assets/images/logo-black_300.png';

const Home = () => {
  const handleClick = () => {
    window.location.replace('/order');
  };
  return (
    <HomeSection>
      <img src={logoImage} alt="logo" />
      <RoundButton onClick={handleClick}>주문하러 가기</RoundButton>
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 51px;
    margin-bottom: 41px;
  }
`;
