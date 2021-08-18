import React  from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addDiary, editDiary } from '../reducers/diary';

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

const DiaryControl = ({date, title, emotion, imgurl,text, edited}) => {
    const router = useRouter();
    const dispatch = useDispatch();

    let year = ''+date.getFullYear();
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let day = ('0' + date.getDate()).slice(-2);

    const finaldate = [year, month, day];

    const onClickSave = (e) => {
        e.preventDefault();
        if(title === "" || emotion === "" || imgurl === "" || text === ""){
            alert("입력되지 않은 정보가 있습니다!");
        }else{
            dispatch(addDiary({
                date: finaldate,
                title,
                emotion,
                imgurl,
                text,
            }));
            window.location.assign(window.location.origin);
        }
    };

    const onClickEdit = (e) => {
        e.preventDefault();
        if(title === "" || emotion === "" || imgurl === "" || text === ""){
            alert("입력되지 않은 정보가 있습니다!");
        }else{
            dispatch(editDiary({
                date: finaldate,
                title,
                emotion,
                imgurl,
                text,
            }));
            window.location.assign(window.location.origin);
        }
    };

    return (
        <ControlWrapper>
            <BackButton onClick={() => {window.location.assign(window.location.origin)} }>뒤로가기</BackButton>
            {edited === false ? 
                <SaveButton onClick={onClickSave}>저장</SaveButton> :
                <SaveButton onClick={onClickEdit}>수정</SaveButton>
            }

        </ControlWrapper>
    );
};

export default DiaryControl;