import React, { useCallback,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import {Rate } from 'antd';
import  { PlusCircleOutlined } from '@ant-design/icons';

import {addTodo} from '../reducers/todo'


const Wrapper = styled.div`
    display: flex;
    position: relative;
    margin-top: 20px;
`
const PlustButton = styled(PlusCircleOutlined)`
    font-size: 40px;
    position: relative;
    margin-left: 40px;
    margin-top: 20px;
    color: white;
`

const InputToDo = styled.input`
    height: 40px;
    width: 350px;
    margin-top: 20px;
    margin-left: 10px;
    position: relative;
    color: black;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    padding: 0 0 0 0 ;
`

const FormWrapper = styled.form`
    display: flex;
`;

const RateWrapper = styled(Rate)`
    font-size: 20px;
    margin-top: 20px;
    margin-left: 10px;
`;
 
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
        console.log(text, rate);
        dispatch(addTodo({
            todo:text,
            rate
        }));
    };
    return(
        <Wrapper>
        <PlustButton onClick={onClickPlus}/>
        {buttonClicked && (
            <FormWrapper onSubmit={onSubmit} >
                <InputToDo type="text" placeholder=" 할일과 중요도를 입력 후 Enter를 누르세요" onChange={onChangeInput} value={text}/>
                <RateWrapper onChange={onChange} value={rate} />
            </FormWrapper>
        )}
        </Wrapper>
    );
};

export default AddTodo;