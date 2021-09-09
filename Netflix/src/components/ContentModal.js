import React,{useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTvInfoAction } from '../reducers/tvInfo';

const ModalWrapper = styled.div`
    flex-direction: column;
    position: relative;
    width: 50%;
    height: auto;
    justify-content: center;
    margin: 0 auto;
    margin-top: 40px;
    background-color: red;
    z-index: 1000;
`;
const ContentModal = ({isOpen, contentId}) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTvInfoAction(contentId));
    },[]);

    const infos = useSelector((state)=>state.tvInfo.infos);

    return (
        <>
        {isOpen ? 
        (<ModalWrapper>
            <h1>{infos.overview}</h1>
        </ModalWrapper>)
        : null}
        </>
    );
};

export default ContentModal;