import React from 'react';
import { useRouter } from 'next/router';


const Index = () => {

    const Router = useRouter();
    return(
        <>
            <button onClick={()=>Router.push('/NewDiary')}>일기 작성</button>
        </>
    );
};

export default Index;