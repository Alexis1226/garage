import styled from '@emotion/styled';

const Loading = () => {
  return (
    <LoadingcSection>
      목록을 <br />
      불러오고 있습니다.
    </LoadingcSection>
  );
};

export default Loading;

const LoadingcSection = styled.section`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
