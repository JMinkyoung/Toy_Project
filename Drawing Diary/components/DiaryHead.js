import React,{useState,useContext} from 'react';
import styled from 'styled-components';
import {SmileOutlined, MehOutlined, FrownOutlined} from '@ant-design/icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from 'date-fns/locale';

import DiaryCanvas from './DiaryCanvas';

const HeadWrapper = styled.div`
    display: inline-block;
    width:645px;
    height: 86px;
    position: relative;
    padding-top: 31px;
    padding-left: 31px;
`;

const DateWrapper = styled.div`
    margin-top: 22px;
    margin-left: 8px;
    position: relative;
    display: flex;
    float:left;
    height: 86px;
`;

const DatePickerStyle = styled(DatePicker)`
    width: 180px;
    font-size: 25px;
    border: none;
    border-radius: 5px;
    :focus{
        outline: none;
    }
`

const TitleWrapper = styled.div`
    position: relative;
    display: flex;
    float:left;
    height: 86px;
    width: 200px;
    font-size: 200px;
`;

const TitleInput = styled.input`
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

const EmotionWrapper = styled.div`
    position: absolute;
    float: left;
    display: flex;
    height: 86px;
    font-size: 45px;
    margin-left: 430px;
    margin-top: 12px;
`;

const GoodEmotion = styled(SmileOutlined)`
    color : ${props => props.emotion === "good" ? '#49BD4D' : 'black'};
`;

const SosoEmotion = styled(MehOutlined)`
    color : ${props => props.emotion === "soso" ? 'orange' : 'black'};
`;
const BadEmotion = styled(FrownOutlined)`
    color : ${props => props.emotion === "bad" ? 'red' : 'black'};
`;

const DiaryHead = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [emotion, setEmotion] = useState('');
    const [title, setTitle] = useState('');


    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const onClickEmotion = (params, e)=>{
        e.preventDefault();
        setEmotion(params);
    };
    
    return (
        <>
        <HeadWrapper>
            <DateWrapper>
                <DatePickerStyle 
                    dateFormat="yyyy년 MM월 dd일" 
                    locale={ko} 
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)} 
                />
            </DateWrapper>

            <TitleWrapper>
                <TitleInput 
                    placeholder="제목" 
                    onChange={onChangeTitle} />
            </TitleWrapper>

            <EmotionWrapper>
                <GoodEmotion 
                    style={{margin:"10px"}} 
                    onClick={(e)=>{onClickEmotion("good", e)}}
                    emotion={emotion}/>
                <SosoEmotion 
                    style={{margin:"10px"}} 
                    onClick={(e)=>{onClickEmotion("soso", e)}}
                    emotion={emotion}/>
                <BadEmotion 
                    style={{margin:"10px"}} 
                    onClick={(e)=>{onClickEmotion("bad", e)}}
                    emotion={emotion}/>
            </EmotionWrapper>
        </HeadWrapper>
        <DiaryCanvas date={startDate.toString().slice(4,16)} title={title} emotion={emotion} />
        </>
    );
};

export default DiaryHead;