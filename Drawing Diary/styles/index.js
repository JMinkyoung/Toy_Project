import styled from 'styled-components';
import {DeleteOutlined, SaveOutlined,SmileOutlined, 
    MehOutlined, FrownOutlined, MenuOutlined, 
    CloseOutlined, HomeOutlined, PlusOutlined} from '@ant-design/icons';
import { Slider} from 'antd';
import 'antd/dist/antd.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// <--------------------------- DiaryCanvas --------------------------->
export const CanvasWrapper = styled.div`
    display: flex;
`;

export const EraserButton = styled.img`
    position: absolute;
    float: left;
    margin-top: 402px;
    margin-left: 528px;
    height: 36px;

    cursor: pointer;
    :hover{
        color: #cee5d5; 
    }
`;
export const SaveButton = styled(SaveOutlined)`
    float: left;
    position: absolute;
    height: 20px;
    margin-top: 405px;
    margin-left: 575px;
    font-size: 30px;
    cursor: pointer;
    :hover{
        color: greenyellow; 
    }
`;

export const ClearButton = styled(DeleteOutlined)`
    float: left;
    position: absolute;
    height: 20px;
    margin-top: 405px;
    margin-left: 620px;
    font-size: 30px;
    cursor: pointer;
    :hover{
        color: red; 
    }
`;

export const SliderWrapper = styled(Slider)`
    color: black;
    float: left;
    position: absolute;
    display: flex;
    width: 150px;
    margin-top: 415px;
    margin-left: 360px;
`;

export const ColorWrapper = styled.div`
    float: left;
    position: absolute;
    display: flex;
    margin-top: 405px;
    margin-left: 45px;
`;

export const ColorPalette = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 20px;
    border-radius: 50px;
    cursor: pointer;
`;


// <--------------------------- DiaryControl --------------------------->

export const ControlWrapper = styled.div`
    width: 220px;
    height: 50px;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    justify-content: center;
    margin-top: 40px;
`;

export const BackButton = styled.button`
    width: 100px;
    height: 50px;
    background-color:white;
    font-size: 25px;
    border-radius: 20px;
    cursor: pointer;
    
    :hover,:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
    }
`;

export const FinalSaveButton = styled.button`
    width: 100px;
    height: 50px;
    background-color:white;
    font-size: 25px;
    margin-left: 20px;
    border-radius: 20px;
    cursor: pointer;
    :hover,:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
    }
`;

// <--------------------------- DiaryDisplay --------------------------->

export const ContentWrapper = styled.div`
    flex-direction: column;
    position: relative;
    justify-content: center;

    height: 850px;
    width: 700px;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 76px;

    background-image: url('/images/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 400px) {
        margin-top: 150px;
    }

`;

export const HeadContent = styled.div`
    display: inline-flex;
    width:645px;
    height: 86px;
    margin-top: 31px;
    margin-left: 31px;
`;

export const DateContent = styled.div`
    margin-top: 22px;
    margin-left: 10px;
    position: relative;
    height: 40px;
    width: 180px;
    font-size: 25px;

    @media screen and (max-width: 400px) {
        width: 30%;
    }
`;

export const TitleContent = styled.textarea`
    position: relative;
    margin-top: 5px;
    height: 73px;
    width: 230px;
    font-size: 43px;
    border: none;
    border-radius: 5px;
    text-align: center;
    resize:none;
    background-color: white;
    color: black;
    :focus{
        outline: none;
    }

    @media screen and (max-width: 400px) {
        width: 35%;
    }
`;

export const EmotionContent = styled.div`
    margin-top: 16px;
    margin-left: 1%;
    position: relative;
    float:left;
    @media screen and (max-width: 400px) {
        width: 30%;
    }
`;

export const CanvasContent = styled.img`
    position: relative;
    margin-left:34px; 
    margin-top:39px;
    width: 630px;
    height: 360px;
    background-image: url();
`;
export const TextContent = styled.textarea`
    position: relative;
    width: 610px;
    height: 200px;
    font-size: 40px;
    color: black;

    background-color: white;
    border: none;
    resize: none;

    :focus{
        outline: none;
    }
    @media screen and (max-width: 400px) {

    }
`;
export const BottonContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    padding-left: 40px;
    width: 610px;

`;

export const ButtonContent  = styled.div`
    position: absolute;
    margin-left: 490px;
    margin-top: 200px;
`;
export const EditButton = styled.button`
    position: relative;
    width: 60px;
    height: 40px;
    font-size: 20px;
    float: right;
    border-radius: 20px;
    cursor: pointer;
    background-color: white;
    :hover,:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
    }
`;
export const DeleteButton = styled.button`
    position: relative;
    width: 60px;
    height: 40px;
    font-size: 20px;
    float: right;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 5px;
    background-color: white;
    :hover,:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
    }
` ;

// <--------------------------- DiaryHead --------------------------->

export const DateContent2 = styled.div`
    margin-left: 10px;
    position: relative;
    height: 40px;
    width: 180px;
    font-size: 25px;

    @media screen and (max-width: 400px) {
        width: 30%;
    }
`;
export const HeadWrapper = styled.div`
    display: inline-block;
    width:645px;
    height: 86px;
    position: relative;
    padding-top: 31px;
    padding-left: 31px;

    @media screen and (max-width: 400px) {
        width: 80%;
    }
`;

export const DateWrapper = styled.div`
    margin-top: 22px;
    margin-left: 8px;
    position: relative;
    display: flex;
    float:left;
    height: 86px;
`;

export const DatePickerStyle = styled(DatePicker)`
    width: 190px;
    font-size: 25px;
    border: none;
    border-radius: 5px;
    :focus{
        outline: none;
    }
`

export const TitleWrapper = styled.div`
    position: relative;
    display: flex;
    float:left;
    height: 86px;
    width: 200px;
`;

export const TitleInput = styled.input`
    margin-top: 6px;
    height: 70px;
    width: 230px;
    font-size: 50px;
    border: none;
    border-radius: 5px;
    text-align: center;
    ::placeholder{
        color: black;
        text-align: center;
    }
    :focus{
        outline: none;
    }
`;

export const EmotionWrapper = styled.div`
    position: absolute;
    float: left;
    display: flex;
    height: 86px;
    font-size: 45px;
    margin-left: 430px;
    margin-top: 12px;
`;

export const GoodEmotion = styled(SmileOutlined)`
    color : ${props => props.emotion === "good" ? '#49BD4D' : 'black'};
`;

export const SosoEmotion = styled(MehOutlined)`
    color : ${props => props.emotion === "soso" ? 'orange' : 'black'};
`;
export const BadEmotion = styled(FrownOutlined)`
    color : ${props => props.emotion === "bad" ? 'red' : 'black'};
`;

// <--------------------------- DiaryLayout --------------------------->

export const DiaryWrapper = styled.div`
    flex-direction: column;
    position: relative;
    justify-content: center;

    height: 850px;
    width: 700px;
    margin: 0 auto;
    margin-top: 10px;

    background-image: url('/images/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

// <--------------------------- DiaryText --------------------------->

export const TextWrapper = styled.textarea`
    width: 600px;
    height: 250px;
    font-size: 40px;

    margin-top: 70px;
    margin-left: 50px;
    border: none;
    resize: none;

    :focus{
        outline: none;
    }
`;

// <--------------------------- MonthNavi --------------------------->

export const NaviWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 50px;
    cursor: pointer;
    position: fixed;
    background-color: white;
    z-index: 1000;
    top: 0;
    left: 0;
    transition:0.4s;
    ${({scroll}) => {
        return scroll > 90 ? `border-bottom: 1px solid #eee` : null ;
    }}
`;

export const NaviLayer = styled.div`
    position: fixed;
    width: 200px;
    height: 100%;
    background-color: #8FBC94;
    z-index:1000;

    left:-100%; top: 0; bottom:0; right: 100%;
    transform-origin:50% 50%;
    transform:tr;
    transition:0.5s;
    
    ${({open}) => {
        return open ? `left:0; right:0;` : `left:-100%; right:100%;`;
    }}
`;

export const NaviCloseButton = styled(CloseOutlined)`
    position: relative;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 23px;

`;

export const MonthList = styled.ul`
    cursor: pointer;
    font-size: 25px;
    color: #001D00;
    margin-left: 0px;
    margin-top: 10px;
    :hover{
        color:#cee5d5;
    }
`;

export const HamburgerButton = styled(MenuOutlined)`
    position: relative;
    margin-top: 5px;
    font-size: 20px;
    z-index: 99 ;
`;

export const FilterWrapper = styled.div`
    display: flex;
    padding-top: 8px;
    padding-left: 10px;
    transition: all 0.3s ease;
    :hover{
        color: #8FBC94; 
    }
`;

export const HomeButton = styled(HomeOutlined)`
    font-size: 30px;
    margin: 0 auto;
    padding-top: 9px;
    padding-right: 50px;
`;

export const PlusButton = styled(PlusOutlined)`
    font-size: 30px;
    padding-top: 9px;
    padding-right: 40px;
`;