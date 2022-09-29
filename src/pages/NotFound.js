import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  line-height: 2;
`;

const NotFound = () => {
  return (
    <Div>
      <h1>404 Not Found</h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
    </Div>
  );
};

export default NotFound;
