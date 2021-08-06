import React from 'react';
import { useRouter } from 'next/router';
import DiaryDisplay from '../components/DiaryDisplay';
import { useSelector} from 'react-redux';

const Index = () => {
    const diarys = useSelector((state)=>state.diaryReducer.diarys);
    
    const Router = useRouter();
    return(
        <>
            <button onClick={()=>Router.push('/NewDiary')}>일기 작성</button>
            {diarys.map((diary)=> <DiaryDisplay key={diary.date} data={diary}/>)}
        </>
    );
};

export default Index;