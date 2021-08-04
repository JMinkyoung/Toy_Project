import React from 'react';
import DiaryLayout from '../components/DiaryLayout';
import DiaryHead from '../components/DiaryHead';
// import DiaryCanvas from '../components/DiaryCanvas';
// import DiaryText from '../components/DiaryText';

const NewDiary = () => {
    return (
        <DiaryLayout>
            <DiaryHead/>
            {/* <DiaryCanvas/> */}
            {/* <DiaryText/> */}
        </DiaryLayout>
    );
};

export default NewDiary;