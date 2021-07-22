import React, { useCallback,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Title, PlusButton, InputToDo, FormWrapper, RateWrapper } from '../styles';
import {addTodo} from '../reducers/todo'

 
const AddTodo = () => {

    const [buttonClicked, setButtonClicked] = useState(false);
    const [text, setText] = useState('');
    const [rate, setRate] = useState(3);

    const dispatch = useDispatch();
    
    const onClickPlus = () => {
        setButtonClicked(!buttonClicked);
    };
    const onChangeInput = (e) => {
        setText(e.target.value);
    };
    const onChange = useCallback((e)=>{
        setRate(e);
    },[rate]);

    const onSubmit = (e) => {
        // 새로고침 방지
        e.preventDefault();
        dispatch(addTodo({
            text,
            rate
        }));
        setText('');
    };
    return(
        <Wrapper>
        <PlusButton onClick={onClickPlus}/>
        {buttonClicked ? 
            (<FormWrapper onSubmit={onSubmit} >
                <RateWrapper onChange={onChange} value={rate} />
                <InputToDo type="text" placeholder="중요도와 할일을 입력 후 Enter를 누르세요" onChange={onChangeInput} value={text}/>
            </FormWrapper>) 
            : 
            (<Title>오늘의 To Do List</Title>)}
        </Wrapper>
    );
};

export default AddTodo;