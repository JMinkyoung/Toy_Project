import React  from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addDiary, editDiary } from '../reducers/diary';
import { ControlWrapper, BackButton, FinalSaveButton } from '../styles';

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
            alert("입력되지 않은 정보가 있습니다! \n그림을 꼭 저장해주세요!");
        }else{
            dispatch(addDiary({
                date: finaldate,
                title,
                emotion,
                imgurl,
                text,
            }));
            // window.location.assign(window.location.origin);
            router.push('/DiaryList');
        }
    };

    const onClickEdit = (e) => {
        e.preventDefault();
        if(title === "" || emotion === "" || imgurl === "" || text === ""){
            alert("입력되지 않은 정보가 있습니다! \n그림을 꼭 저장해주세요!");
        }else{
            dispatch(editDiary({
                date: finaldate,
                title,
                emotion,
                imgurl,
                text,
            }));
            // window.location.assign(window.location.origin);
            router.push('/DiaryList');
        }
    };

    return (
        <ControlWrapper>
            <BackButton onClick={() => {router.push('/DiaryList');} }>뒤로가기</BackButton>
            {edited === false ? 
                <FinalSaveButton onClick={onClickSave}>저장</FinalSaveButton> :
                <FinalSaveButton onClick={onClickEdit}>수정</FinalSaveButton>
            }

        </ControlWrapper>
    );
};

export default DiaryControl;