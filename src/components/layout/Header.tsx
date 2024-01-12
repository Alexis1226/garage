import styled from '@emotion/styled';
import logoImage from '../../assets/images/logo-black_189.png';

const Header = () => {
  return (
    <TopBar>
      <div>
        <img src={logoImage} alt="logo" />
      </div>
    </TopBar>
  );
};

export default Header;

const TopBar = styled.section`
  width: 100vw;
  max-height: 80px;
  aspect-ratio: 350/57;
  background-color: black;
  /* width: 350px;
  height: 57px; */

  & > div {
    display: flex;
    height: 100%;
    flex: 1;
    align-items: center;
    padding: 12px;

    img {
      box-sizing: border-box;
      height: 100%;
      flex-shrink: 0;
      object-fit: contain;
    }
  }
`;
