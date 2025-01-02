import React, { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px; /* 3D 공간 감각 */
  height: 400px;
  position: relative;
  margin: 50px 0;
  overflow: hidden; /* 가로 스크롤 방지 */
  max-width: 100%; /* 부모 컨테이너에 맞게 제한 */
`;

const Card = styled.div`
  position: absolute;
  width: 250px; /* 카드 크기 */
  height: 350px;
  background-color: ${(props) => props.theme.colors.background || "#084c61"};
  color: ${(props) => props.theme.colors.textPrimary || "#ffffff"};
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-align: center;
  transition: transform 0.5s ease, opacity 0.5s ease;

  /* 위치와 크기 설정 */
  transform: ${({ position }) =>
    position === 0
      ? "translateX(0) scale(1)" // 가운데 카드
      : `translateX(${position * 260}px) scale(0.8)`}; // 좌우 카드 간격 조정
  opacity: ${({ position }) => (Math.abs(position) <= 2 ? 1 : 0.5)};
  z-index: ${({ position }) => 5 - Math.abs(position)};
  cursor: pointer;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${(props) => props.theme.colors.primary || "#47d147"};
  border: none;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary || "#a8e6cf"};
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    "프로젝트 1",
    "프로젝트 2",
    "프로젝트 3",
    "프로젝트 4",
    "프로젝트 5",
  ];

  const getPosition = (index) => {
    const diff = (index - currentIndex + cards.length) % cards.length;
    if (diff === 0) return 0; // 가운데 카드
    if (diff === 1 || diff === -4) return 1; // 오른쪽 첫 번째 카드
    if (diff === 2 || diff === -3) return 2; // 오른쪽 두 번째 카드
    if (diff === -1 || diff === 4) return -1; // 왼쪽 첫 번째 카드
    if (diff === -2 || diff === 3) return -2; // 왼쪽 두 번째 카드
    return null;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <SliderContainer>
      {cards.map((content, index) => (
        <Card
          key={index}
          position={getPosition(index)}
          onClick={() => setCurrentIndex(index)}
        >
          {content}
        </Card>
      ))}
    </SliderContainer>
  );
}

export default Portfolio;
