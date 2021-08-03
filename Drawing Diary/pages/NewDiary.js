import React from 'react';
import DiaryLayout from '../components/DiaryLayout';
import DiaryHead from '../components/DiaryHead';
import DiaryCanvas from '../components/DiaryCanvas';
const NewDiary = () => {
    return (
        <DiaryLayout>
            <DiaryHead/>
            <DiaryCanvas/>
        </DiaryLayout>
    );
};

export default NewDiary;