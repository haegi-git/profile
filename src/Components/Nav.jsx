
import styled from "styled-components";

const Menu = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    height: 100%; /* 화면 전체 높이 */
    width: 90px; /* 고정된 너비 */
    background-color: ${(props) => props.theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: ${(props) => props.theme.colors.border};
    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        list-style: none;
        margin: 0;
        padding: 0;
        li {
            text-align: center;
            a {
                text-decoration: none;
                color: ${(props)=> props.theme.colors.textSecondary};
                font-size: 1rem;
                transition: color 0.3s;
                &:hover {
                    color: ${(props)=> props.theme.colors.textSecondaryHover};
                }
            }
        }
    }
`;

function NavMenu() {
    return (
        <Menu>
            <ul>
                <li>
                    <a href="#section1">인사말</a>
                </li>
                <li>
                    <a href="#section2">기술 스택</a>
                </li>
                <li>
                    <a href="#section3">프로젝트</a>
                </li>
            </ul>
        </Menu>
    );
}

export default NavMenu;
