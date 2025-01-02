import styled from "styled-components";
import {AiFillHome} from "react-icons/ai";

const Menu = styled.nav`
    position: fixed;
    top:0;
    background-color: ${(props) => props.theme.colors.background};
    left: 0;
    width: 100%;
    height: 90px;
    border-bottom: ${(props) => props.theme.colors.border};
    z-index: 55;
    display: flex;
    justify-content: space-between;
    color:${(props) => props.theme.colors.textSecondary}
`

function TopNav(){
    return(
        <Menu>
            <AiFillHome/>
            
            <ul>
                <li>
                    이메일
                </li>
                <li>
                    감사
                </li>
            </ul>

        </Menu>
    )
}
export default TopNav