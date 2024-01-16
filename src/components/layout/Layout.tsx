import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from '@emotion/styled';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  overflow: auto;
  font-size: 18px;
  padding: 0 24px 18px;
`;
