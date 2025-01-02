import styled, { css } from "styled-components";
import profileImg from "../assets/profileImg.jpg";
import Language from "./Skills/Language";
import { useState } from "react";
import FrontEnd from "./Skills/FrontEnd";
import BackEnd from "./Skills/BackEnd";
import DataBase from "./Skills/DataBase";
import Comment from "./Skills/Comment";

// 전체 컨테이너 스타일
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;

  > div {
    > h3 {
      color: ${(props) => props.theme.colors.secondary};
    }
    > ul {
      display: flex;
      list-style: none;
      color: ${(props) => props.theme.colors.textSecondary};
      margin-bottom: 20px;

      li {
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        transition: color 0.3s ease, background-color 0.3s ease;

        ${(props) =>
          props.selected &&
          css`
            color: ${(props) => props.theme.colors.primary}; /* 선택된 글씨 색상 */
            background-color: ${(props) => props.theme.colors.secondary}; /* 선택된 배경 */
          `}

        &:hover {
          color: ${(props) => props.theme.colors.primary}; /* 호버 시 색상 */
        }
      }
    }
  }

`;
const ProfileImageContainer = styled.div`
  position: relative;
  width: 320px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3); /* 그림자 추가 */
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary || "#47d147"},
    ${(props) => props.theme.colors.secondary || "#084c61"}
  );

  /* 이미지 */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지 비율 유지 */
    filter: brightness(0.9); /* 약간 어둡게 처리 */
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
      transform: scale(1.05); /* 확대 효과 */
    }
  }

  /* 블러 효과 */
  &:before {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.1);
    filter: blur(15px);
    z-index: -1; /* 이미지 아래에 배치 */
  }
`;

function SkillInfo() {
  const [selectedTab, setSelectedTab] = useState("Language"); // 기본 선택된 탭

  return (
    <Container>
      <div>
        <h3>기술과 하고싶은 말</h3>
        <ul>
          {["Language", "FrontEnd", "BackEnd","DataBase", "Comment"].map((tab) => (
            <li
              key={tab}
              style={{
                color: selectedTab === tab ? "#ffffff" : "#b0c4de",
                backgroundColor: selectedTab === tab ? "#47d147" : "transparent",
              }}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
        {/* 조건에 따라 컴포넌트 렌더링 */}
        {selectedTab === "Language" && <Language />}
        {selectedTab === "FrontEnd" && <FrontEnd />}
        {selectedTab === "BackEnd" && <BackEnd />}
        {selectedTab === "DataBase" && <DataBase />}
        {selectedTab === "Comment" && <Comment />}
      </div>

      <ProfileImageContainer>
        <img src={profileImg} alt="Profile" />
      </ProfileImageContainer>
    </Container>
  );
}

export default SkillInfo;
