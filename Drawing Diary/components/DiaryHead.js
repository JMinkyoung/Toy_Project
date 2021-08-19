import React,{useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from 'date-fns/locale';

import DiaryCanvas from './DiaryCanvas';
import { DateContent2, HeadWrapper, DateWrapper, DatePickerStyle, TitleWrapper,TitleInput,EmotionWrapper, GoodEmotion, SosoEmotion, BadEmotion } from '../styles';


const DiaryHead = ({data}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [emotion, setEmotion] = useState('');
    const [title, setTitle] = useState('');

    if(data !== undefined){
        useEffect(()=>{
            setStartDate(new Date(Number(data.date[0]),Number(data.date[1])-1,Number(data.date[2])));
            setTitle(data.title);
            setEmotion(data.emotion);
        },[]);
    }
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
 
                    {data === undefined ?
                        <DatePickerStyle 
                        dateFormat="yyyy년 MM월 dd일" 
                        locale={ko} 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)}/> 
                        :
                        <DateContent2>{`${data.date[0]}년 ${data.date[1]}월 ${data.date[2]}일`}</DateContent2>
                    }
            </DateWrapper>

            <TitleWrapper>
                {data === undefined ?
                    <TitleInput 
                        placeholder="제목" 
                        onChange={onChangeTitle} 
                    /> : 
                    <TitleInput 
                        value={title}
                        onChange={onChangeTitle} 
                    />}
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
            {data === undefined ?
                <DiaryCanvas date={startDate} title={title} emotion={emotion} /> :
                <DiaryCanvas date={startDate} title={title} emotion={emotion} imgurlDone={data.imgurl} text={data.text}/>
            }
        </>
    );
};

export default DiaryHead;