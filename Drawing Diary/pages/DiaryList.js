import React, { useState } from 'react';
import MonthNavi from '../components/MonthNavi';
import DiaryDisplay from '../components/DiaryDisplay';
import { useSelector} from 'react-redux';

const DiaryList = () => {
    const diarys = useSelector((state)=>state.diaryReducer.diarys);
    // 현재 날짜를 기준으로 보여준다.
    const today = new Date();
    const [month, setMonth] = useState("0"+ (today.getMonth() + 1));    
    return(
        <>  
            <MonthNavi setMonth={setMonth} />
            {diarys.map((diary)=>{
                if(diary.date[1] === month){
                    return <DiaryDisplay key={diary.date} data={diary}/>
                }
            })}
        </>
    );
};

export default DiaryList;