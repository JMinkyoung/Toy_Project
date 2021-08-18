import React from 'react';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    return(
        <>  
            <h1>사이트 소개 및 이동버튼 여기에</h1>
            <button onClick={()=>router.push('/NewDiary')}>일기 작성</button>
            <button onClick={()=>router.push('/DiaryList')}>일기 보기</button>
        </>
    );
};

export default Index;