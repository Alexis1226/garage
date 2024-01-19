import styled from '@emotion/styled';
import tick from '../assets/icons/CheckFilled.svg';
import { FlexCenterSection } from '../styles/common/FlexCenterSection';
import { useNavigate } from 'react-router-dom';

const Complete = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/order');
  }, 3000);

  return (
    <CompleteSection>
      <img src={tick} alt="tickIcon" />
      주문이 완료되었습니다.
    </CompleteSection>
  );
};

export default Complete;

const CompleteSection = styled(FlexCenterSection)`
  flex-direction: column;

  img {
    width: 48px;
    aspect-ratio: 1;
  }
`;
