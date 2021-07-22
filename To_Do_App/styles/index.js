import styled from 'styled-components';
import  { PlusCircleOutlined,  DeleteOutlined, SortAscendingOutlined } from '@ant-design/icons';
import { Rate, Progress } from 'antd';
import 'antd/dist/antd.css';

//----------------- AddToDo.js ----------------- 
export const Wrapper = styled.div`
    display: flex;
    position: relative;
    margin-top: 20px;
`
export const Title = styled.div`
    display: flex;
    position: relative;
    margin-top: 15px;
    margin-left: 90px;
    font-size: 30px;
    font-family: sans-serif;
    color: #fefefe;
    font-weight: bolder;
`;
export const PlusButton = styled(PlusCircleOutlined)`
    font-size: 40px;
    position: relative;
    margin-left: 40px;
    margin-top: 20px;
    color: white;
`

export const InputToDo = styled.input`
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
    :focus{
        outline: none;
    }
`
export const FormWrapper = styled.form`
    display: flex;
`;

export const RateWrapper = styled(Rate)`
    font-size: 20px;
    margin-top: 20px;
    margin-left: 10px;
`;

//----------------- AppLayout.js ----------------- 
export const AppLayoutWrapper = styled.div`

    width: 600px;
    height: 800px;

    position: relative;
    background :#cee5d5;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.04);

    margin: 0 auto;

    margin-top: 50px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 500px) {
        // 모바일 설정 아직 안함
        
    }
`;

//----------------- ToDoContent.js ----------------- 
export const ToDoWrapper = styled.div`
    position: relative;
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 15px;
    font-family: sans-serif;
`;

export const DeleteButton = styled(DeleteOutlined)`
    font-size: 30px;
    cursor: pointer;
    margin-top: 2px;
    margin-left: 20px;
    position: relative;
    :hover{
        color:#BD2F28;
    }
`;

//----------------- ToDoHead.js ----------------- 
export const HeadWrapper = styled.div`
    display: flex;
    position: relative;
    margin-left: 70px;
    margin-top: 20px;
`;

export const TextWrapper = styled.p`
    margin-left: 60px;
    padding-top: 15px;
    font-size: large;
    font-weight: bolder;
    color: #4c6446;

`
export const ProgressWrapper = styled(Progress)`
    margin-left: 80px;
`;

//----------------- ToDoLayout.js ----------------- 
export const ToDoLayoutWrapper = styled.div`
    background-color: #F2F2F2;
    height: 600px;
    width: 500px;
    border-radius: 16px;
    margin-left: 50px;
    margin-top: 10px;
`;

//----------------- ToDoList.js ----------------- 
export const ToDoListWrapper = styled.div`
    flex : 1;
    margin-bottom: 5px;
    position: relative;
`;

export const SortButton = styled(SortAscendingOutlined)`
    font-size: 30px;
    margin-top: 5px;
    margin-left: 465px;
    cursor: pointer;
    :hover{
        color:gray;
    }
`;

