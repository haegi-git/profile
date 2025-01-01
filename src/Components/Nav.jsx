import React from "react";
import styled from "styled-components";

const Menu = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    height: 100%; /* 화면 전체 높이 */
    width: 90px; /* 고정된 너비 */
    background-color: #f7f9fc; /* 네비게이션 배경 색상 */
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #ccc;
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
                color: #333333;
                font-size: 1rem;
                transition: color 0.3s;
                &:hover {
                    color: #555555;
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
                    <a href="#section1">Section 1</a>
                </li>
                <li>
                    <a href="#section2">Section 2</a>
                </li>
                <li>
                    <a href="#section3">Section 3</a>
                </li>
            </ul>
        </Menu>
    );
}

export default NavMenu;
