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
  min-height: 57px;
  max-height: 80px;
  aspect-ratio: 350 / 57;
  background-color: black;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  & > div {
    display: flex;
    height: 100%;
    flex: 1;
    align-items: center;
    padding: 12px 12px 13px;

    img {
      box-sizing: border-box;
      height: 100%;
      flex-shrink: 0;
      object-fit: contain;
    }
  }
`;
