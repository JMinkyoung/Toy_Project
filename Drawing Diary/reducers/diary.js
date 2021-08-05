const initialState = {
    diarys :[
        { 
            date: "Aug 03 2021",
            title: "테스트용",
            emotion: "soso",
            imgurl: "",
            text: "아무내용이나 적어보자"
        },
        { 
            date: "Aug 01 2021",
            title: "푸푸 생일",
            emotion: "good",
            imgurl: "",
            text: "오늘은 채원이 생일이다!"
        }
    ]
};

export const CREATE = 'CREATE';
export const DELETE = 'DELETE';

export const addDiary = (data) => ({
    type:CREATE,
    diarys:{
        date: data.date,
        title: data.title,
        emotion: data.emotion,
        imgurl: data.imgurl,
        text: data.text,
    }
});

const diaryReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE:
            return{
                ...state,
                diarys:[action.diarys, ...state.diarys]
            };
        default:
            return state;
    }
};

export default diaryReducer;