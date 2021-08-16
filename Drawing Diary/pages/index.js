import React, {useState} from 'react';
import { useRouter } from 'next/router';
import DiaryDisplay from '../components/DiaryDisplay';
import MonthNavi from '../components/MonthNavi';
import { useSelector} from 'react-redux';

const Index = () => {
    const diarys = useSelector((state)=>state.diaryReducer.diarys);
    // 현재 날짜를 기준으로 보여준다.
    const today = new Date();
    const [month, setMonth] = useState("0"+ (today.getMonth() + 1));
    let year = today.getFullYear();
    
    const Router = useRouter();
    return(
        <>  
            {/* <button onClick={()=>Router.push('/NewDiary')}>일기 작성</button> */}
            <MonthNavi setMonth={setMonth} />
            {diarys.map((diary)=>{
                if(diary.date[1] === month){
                    return <DiaryDisplay key={diary.date} data={diary}/>
                }
            })}
        </>
    );
};

export default Index;