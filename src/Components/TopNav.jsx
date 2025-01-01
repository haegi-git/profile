import styled from "styled-components";
import {AiFillHome} from "react-icons/ai";

const Menu = styled.nav`
    position: fixed;
    top:0;
    background-color: #f7f9fc; /* 네비게이션 배경 색상 */
    left: 0;
    width: 100%;
    height: 90px;
    border-bottom: 1px solid #ccc;
    z-index: 55;
    display: flex;
    justify-content: space-between;
`

function TopNav(){
    return(
        <Menu>
            <AiFillHome style={{fontSize:'32px',paddingRight:'58px',borderRight:'1px solid #ccc',height: '100%'}} />
            
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