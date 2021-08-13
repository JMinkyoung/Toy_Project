import React from 'react';

const DiaryEdit = ({data}) => {
    return (
        <>
            {data.date}
            {data.title}
        </>
    );
};

export default DiaryEdit;