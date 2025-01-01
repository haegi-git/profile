import styled from "styled-components";
import profileImg from "../assets/profileImg.jpg"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    div{
        ul{
            display: flex;
            list-style: none;
            li{
                padding: 0 10px;
            }
        }
    }
}
    img {
        width: 300px; /* 이미지 너비 */
        height: 400px; /* 이미지 높이 */
        object-fit: cover; /* 비율을 유지하면서 컨테이너에 맞게 채움 */
        border-radius: 20px; /* 둥근 모서리 추가 */
        border: 5px solid #e0e0e0; /* 테두리 추가 */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* 호버 효과를 위한 애니메이션 */

        &:hover {
            transform: scale(1.05); /* 호버 시 약간 확대 */
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3); /* 호버 시 그림자 강조 */
        }
`

function SkillInfo(){
    return(
        <Container>

            <div>
                <h3>저의 기술과 하고싶은 말</h3>
                <ul>
                    <li>
                        Language
                    </li>
                    <li>
                        FrontEnd
                    </li>
                    <li>
                        BackEnd
                    </li>
                </ul>

            </div>

            <img src={profileImg}/>

        </Container>
    )
}
export default SkillInfo