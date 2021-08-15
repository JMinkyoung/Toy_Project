import React,{useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import DiaryControl from './DiaryControl';

const TextWrapper = styled.textarea`
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
                <TextWrapper onChange={onChangeText} placeholder="일기 내용을 입력하세요"/> :
                <TextWrapper onChange={onChangeText} value={diaryText}/>
            }
            {<DiaryControl date={date} title={title} emotion={emotion} imgurl={imgurl} text={diaryText} edited={edited}/>}
        </>
    );
};

export default DiaryText;