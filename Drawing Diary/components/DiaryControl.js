import React  from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addDiary } from '../reducers/diary';

const ControlWrapper = styled.div`
    width: 220px;
    height: 50px;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    justify-content: center;
    margin-top: 40px;
`;

const BackButton = styled.button`
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

const SaveButton = styled.button`
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

const DiaryControl = ({date, title, emotion, imgurl,text}) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const onClickSave = (e) => {
        e.preventDefault();
        dispatch(addDiary({
            date,
            title,
            emotion,
            imgurl,
            text,
        }));
        router.push('/');
    };
    
    return (
        <ControlWrapper>
            <BackButton onClick={() => router.push('/')}>뒤로가기</BackButton>
            <SaveButton onClick={onClickSave}>저장</SaveButton>
        </ControlWrapper>
    );
};

export default DiaryControl;