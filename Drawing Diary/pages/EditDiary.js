import React, { useEffect } from 'react';
import DiaryEdit from '../components/DiaryEdit';
import { useRouter } from 'next/router';
import { useSelector} from 'react-redux';

const EditDiary = () => {

    const router = useRouter();
    const diarys = useSelector((state)=>state.diaryReducer.diarys);
    const date = router.query.date;
    useEffect(()=>{

    },[]);

    return(
        <>
            <h1>수정페이지 테스트</h1>
            {diarys.map((diary)=>{
                if(diary.date[0] === date[0] && diary.date[1] === date[1] && diary.date[2] === date[2]){
                    return <DiaryEdit key={diary.date} data={diary}/>
                }
            })}
        </>
    );
};

export default EditDiary;