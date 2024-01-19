import { useNavigate } from 'react-router-dom';
import { FlexCenterSection } from '../styles/common/FlexCenterSection';

const Error = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/order');
  }, 3000);
  return (
    <FlexCenterSection>
      주문에 실패하였습니다.
      <br />
      다시 시도해주세요.
    </FlexCenterSection>
  );
};

export default Error;
