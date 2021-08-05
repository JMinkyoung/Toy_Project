import React,{useState, useContext} from 'react';
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
const DiaryText = ({date, title, emotion, imgurl}) => {
    const [diaryText, setDiaryText] = useState('');

    const onChangeText = (e) => {
        e.preventDefault();
        setDiaryText(e.target.value);
    }
    return(
        <>
            <TextWrapper onChange={onChangeText} placeholder="일기 내용을 입력하세요"/>
            <DiaryControl date={date} title={title} emotion={emotion} imgurl={imgurl} text={diaryText} />
        </>
    );
};

export default DiaryText;