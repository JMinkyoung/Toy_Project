import React from 'react';
import DiaryLayout from './DiaryLayout';
import DiaryHead from './DiaryHead';

const DiaryEdit = ({data}) => {
    return (
        <>
        <DiaryLayout>
            <DiaryHead data={data}/>
        </DiaryLayout>
        </>
    );
};

export default DiaryEdit;