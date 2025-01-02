import styled, { keyframes } from "styled-components";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

// 페이드인 애니메이션 정의
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Arial", sans-serif;
    color:#fff;
`;

const Header = styled.div`
    text-align: center;
    margin-bottom: 30px;
    animation: ${fadeIn} 1.5s ease-in-out; /* 애니메이션 적용 */

    h1 {
        font-size: 3.5rem; /* 메인 타이틀 크기 */
        font-weight: bold;
        color: ${(props) => props.theme.colors.primary};
        margin-bottom: 15px;
        animation: ${fadeIn} 1.5s ease-in-out; /* 애니메이션 */
        animation-delay: 0.2s; /* 딜레이 추가 */
    }

    h3 {
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.secondary};
        line-height: 1.6;
        animation: ${fadeIn} 1.5s ease-in-out;
        animation-delay: 0.3s; /* 딜레이 추가 */
    }
`;

const Description = styled.p`
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.textSecondary};
    max-width: 700px;
    text-align: center;
    line-height: 1.8;
    margin-top: 15px;
    animation: ${fadeIn} 1.5s ease-in-out;
    animation-delay: 0.4s; /* 딜레이 추가 */
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    animation: ${fadeIn} 1.5s ease-in-out;
    animation-delay: 0.5s; /* 딜레이 추가 */
    overflow: hidden; /* 스크롤 방지 */

    svg {
        font-size: 2.5rem;
        color: ${(props) => props.theme.colors.textSecondary};
        cursor: pointer;
        transition: transform 0.3s ease, color 0.3s ease;

        &:hover {
            transform: scale(1.2);
            color: ${(props) => props.theme.colors.textSecondaryHover};
        }
    }
`;

function Info() {
    return (
        <Wrapper>

            {/* 메인 섹션 */}
            <Header>
                <h1>안녕하세요. 프론트엔드 개발자 배해기입니다.</h1>
                <h3>
                    저는 끊임없이 성장하고 새로운걸 배우는 것을 좋아하며
                    <br />
                    문제 해결을 해나가는 개발의 재미를 좋아합니다.
                </h3>
            </Header>
            <Description>
                신입으로서 부족한 부분이 많겠지만 부족한만큼 더욱 더 노력하며 빠른 성장을 위해 노력하겠습니다.
                저의 포트폴리오 사이트를 방문해주셔서 감사합니다.
            </Description>
            <IconContainer>
                <AiFillGithub />
                <AiOutlineMail />
            </IconContainer>
        </Wrapper>
    );
}

export default Info;
