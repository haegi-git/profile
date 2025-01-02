import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";

// 말풍선 디자인 추가
const ListContainer = styled.div`
  position: relative; /* 삼각형 위치를 위해 부모를 relative로 설정 */
  border: 2px solid ${(props) => props.theme.colors.secondary || "#a8e6cf"};
  border-radius: 10px; /* 둥근 모서리 */
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background || "#06283d"};
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2); /* 밝은 그림자 */

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 15px; /* 리스트 간격 */
  }

  li {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    background-color: #084c61; /* 어두운 청록색 */
    color: ${(props) => props.theme.colors.textPrimary || "#ffffff"};
    font-size: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 리스트 아이템 그림자 */
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-3px); /* 호버 시 위로 살짝 이동 */
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* 호버 시 그림자 강화 */
    }

    svg {
      margin-right: 10px; /* 아이콘과 텍스트 간격 */
      color: ${(props) => props.theme.colors.primary || "#47d147"};
      font-size: 1.2rem;
    }
  }

  // 삼각형 디자인
  &:after {
    content: "";
    position: absolute;
    top: -20px; /* 삼각형의 위치 */
    left: 290px; /* 삼각형의 시작점 */
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent
      ${(props) => props.theme.colors.secondary || "#a8e6cf"} transparent; /* 삼각형의 색상 */
  }
`;

function BackEnd() {
  return (
    <ListContainer>
      <ul>
        <li>
          <AiOutlineCheckCircle />
          SpringBoot : 백엔드를 겸하고싶어 국비지원 수업을 들을 때 사용했습니다.
        </li>
        <li>
          <AiOutlineCheckCircle />
          Node.js : NextJs를 사용하기 위해 공부하고 있습니다.
        </li>
        <li>
          <AiOutlineCheckCircle />
          FireBase : 서버리스 백엔드를 사용해본 경험이 있습니다.
        </li>
        <li>
          <AiOutlineCheckCircle />
          SupaBase : 서버리스 백엔드를 사용해본 경험이 있습니다.
        </li>
      </ul>
    </ListContainer>
  );
}

export default BackEnd;
