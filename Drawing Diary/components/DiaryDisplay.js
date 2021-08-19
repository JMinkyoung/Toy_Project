import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { deleteDiary } from '../reducers/diary';
import Router from 'next/router';
import { ContentWrapper, HeadContent, DateContent, TitleContent, 
    EmotionContent, CanvasContent, TextContent, BottonContent, 
    ButtonContent, EditButton, DeleteButton
} from '../styles';


const DiaryDisplay = ({data}) => {

    const dispatch = useDispatch();

    const onClickDelete = () => {
        dispatch(deleteDiary({
            date: data.date,
        }));
    };
    
    const SendData = () => {
        Router.push({
            pathname:'/EditDiary',
            query: {
                date:data.date,
            },
        });
    };
    return (
        <ContentWrapper>

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
                    <DeleteButton onClick={onClickDelete}>삭제</DeleteButton>
                    <EditButton onClick={SendData}>수정</EditButton>
                </ButtonContent>
            </BottonContent>
        </ContentWrapper>
    );
};

export default DiaryDisplay;