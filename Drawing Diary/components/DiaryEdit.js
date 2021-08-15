import React from 'react';
import DiaryLayout from './DiaryLayout';
import DiaryHead from './DiaryHead';

const DiaryEdit = ({data}) => {
    return (
        <>
            {/* {data.date}
            {data.title} */}
        <DiaryLayout>
            <DiaryHead data={data}/>
        </DiaryLayout>
        </>
    );
};

export default DiaryEdit;