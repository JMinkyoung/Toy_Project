import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteDiary } from '../reducers/diary';

const ContentWrapper = styled.div`
    flex-direction: column;
    position: relative;
    justify-content: center;

    height: 850px;
    width: 700px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 76px;

    background-image: url('/images/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 400px) {
        margin-top: 150px;
    }

`;

const HeadContent = styled.div`
    display: inline-flex;
    width:645px;
    height: 86px;
    margin-top: 31px;
    margin-left: 31px;
`;

const DateContent = styled.div`
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

const TitleContent = styled.textarea`
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

const EmotionContent = styled.div`
    margin-top: 16px;
    margin-left: 1%;
    position: relative;
    float:left;
    @media screen and (max-width: 400px) {
        width: 30%;
    }
`;

const CanvasContent = styled.img`
    position: relative;
    margin-left:34px; 
    margin-top:39px;
    width: 630px;
    height: 360px;
    background-image: url();
`;
const TextContent = styled.textarea`
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
const BottonContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    padding-left: 40px;
    width: 610px;

`;

const ButtonContent  = styled.div`
    position: absolute;
    margin-left: 490px;
    margin-top: 200px;
`;
const EditButton = styled.button`
    position: relative;
    width: 60px;
    height: 40px;
    font-size: 20px;
    float: right;

`;
const DeleteButton = styled.button`
    position: relative;
    width: 60px;
    height: 40px;
    font-size: 20px;
    float: right;

` ;

const DeleteModal = styled.div`
    display: table-cell;
    position: absolute;
    z-index: 99;
    width: 300px;
    height: 150px;
    background-color: ivory;
    margin-left: 30%;
    margin-top: 40%;
    border-radius: 20px;
`;

const DiaryDisplay = ({data}) => {

    const dispatch = useDispatch();

    const [isOpend, setIsOpend] = useState(false);
    const handleModal = () => {
        setIsOpend(!isOpend);
    };

    const onClickDelete = () => {
        handleModal();
        dispatch(deleteDiary({
            date: data.date,
        }));
    };
    return (
        <ContentWrapper>
            {isOpend === false ? null :
                    <DeleteModal>
                        <h1 style={{textAlign:"center", verticalAlign:"middle"}}>정말 삭제하실건가요?</h1>
                        <button style={{width:"70px",fontSize:"20px", marginLeft:"70px"}} onClick={onClickDelete}>네</button>
                        <button style={{width:"70px",fontSize:"20px", marginLeft:"10px"}} onClick={handleModal}>아니오</button>
                    </DeleteModal>
            }
            <HeadContent>
                <DateContent>{`${data.date[0]}년 ${data.date[1]}월 ${data.date[2]}일`}</DateContent>
                <TitleContent defaultValue={data.title} readonly disabled/>
                <EmotionContent>
                    {data.emotion === "good" && <img src="/images/good.png"/>}
                    {data.emotion === "soso" && <img src="/images/soso.png"/>}
                    {data.emotion === "bad" && <img src="/images/bad.png"/>}
                </EmotionContent>
            </HeadContent>
            <CanvasContent id="myDraw" src={data.imgurl}/>
            <BottonContent>
                <TextContent defaultValue={data.text} readonly disabled/>
                <ButtonContent>
                    <DeleteButton onClick={handleModal}>삭제</DeleteButton>
                    <EditButton>수정</EditButton>
                </ButtonContent>
            </BottonContent>
        </ContentWrapper>
    );
};

export default DiaryDisplay;