import React,{useState, useEffect} from 'react';
import { TextWrapper } from '../styles';
import DiaryControl from './DiaryControl';

const DiaryText = ({date, title, emotion, imgurl, textDone}) => {
    const [diaryText, setDiaryText] = useState('');
    const [edited, setEdited] = useState(false);

    const onChangeText = (e) => {
        e.preventDefault();
        setDiaryText(e.target.value);
    }
    if(textDone !== undefined){
        useEffect(()=>{
            setDiaryText(textDone);
            setEdited(true);
        },[]);
    };

    return(
        <>
            {textDone === undefined ? 
                <TextWrapper onChange={onChangeText} placeholder="일기 내용을 작성하기 전에 그림을 꼭 저장해주세요!"/> :
                <TextWrapper onChange={onChangeText} value={diaryText}/>
            }
            {<DiaryControl date={date} title={title} emotion={emotion} imgurl={imgurl} text={diaryText} edited={edited}/>}
        </>
    );
};

export default DiaryText;