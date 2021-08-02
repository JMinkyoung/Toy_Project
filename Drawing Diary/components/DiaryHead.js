import React,{useState} from 'react';
import styled from 'styled-components';
import {SmileOutlined, MehOutlined, FrownOutlined} from '@ant-design/icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from 'date-fns/locale';

const HeadWrapper = styled.div`
    display: inline-block;
    width:645px;
    height: 86px;
    position: relative;
    padding-top: 31px;
    padding-left: 31px;
`;

const DateWrapper = styled.div`
    position: relative;
    display: flex;
    float:left;
    height: 86px;
    width: 200px;
`;

const TitleWrapper = styled.div`
    position: relative;
    display: flex;
    float:left;
    height: 86px;
    width: 200px;
    font-size: 200px;
`;

const TitleInput = styled.input`
    margin-top: 8px;
    height: 70px;
    width: 230px;
    font-size: 30px;
    border: none;
    border-radius: 5px;
    ::placeholder{
        color:blue;
        text-align: center;
    }
    :focus{
        outline: none;
    }
`;

const EmotionWrapper = styled.div`
    position: relative;
    float: left;
    display: flex;
    height: 86px;
    font-size: 45px;
    margin-left: 40px;
    margin-top: 12px;
`;
const DiaryHead = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [emotion, setEmotion] = useState('');
    const [title, setTitle] = useState('');
    
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const onClickEmotion = (params, e) => {
        setEmotion(params);
        e.preventDefault();
    };

    return (
        <HeadWrapper>

            <DateWrapper>
                <DatePicker 
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
                <SmileOutlined 
                    style={{margin:"10px"}} 
                    onClick={(e)=>{onClickEmotion("good", e)}}/>
                <MehOutlined 
                    style={{margin:"10px"}} 
                    onClick={(e)=>{onClickEmotion("soso", e)}}/>
                <FrownOutlined 
                    style={{margin:"10px"}} 
                    onClick={(e)=>{onClickEmotion("bad", e)}}/>
            </EmotionWrapper>

        </HeadWrapper>
        
    );
};

export default DiaryHead;