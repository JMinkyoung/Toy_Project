import React,{createRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import {DeleteOutlined, SaveOutlined } from '@ant-design/icons';
import { Slider} from 'antd';
import 'antd/dist/antd.css';
import DiaryText from './DiaryText';

const CanvasWrapper = styled.div`
    display: flex;
`;

const SaveButton = styled(SaveOutlined)`
    float: left;
    position: absolute;
    display: flex;
    height: 20px;
    margin-top: 405px;
    margin-left: 575px;
    font-size: 30px;
    cursor: pointer;
    :hover{
        color: greenyellow; 
    }
`;

const ClearButton = styled(DeleteOutlined)`
    float: left;
    position: absolute;
    display: flex;
    height: 20px;
    margin-top: 405px;
    margin-left: 620px;
    font-size: 30px;
    cursor: pointer;
    :hover{
        color: red; 
    }
`;

const SliderWrapper = styled(Slider)`
    color: black;
    float: left;
    position: absolute;
    display: flex;
    width: 150px;
    margin-top: 415px;
    margin-left: 390px;
`;

const ColorWrapper = styled.div`
    float: left;
    position: absolute;
    display: flex;
    margin-top: 405px;
    margin-left: 80px;
`;

const ColorPalette = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 20px;
    border-radius: 50px;
    cursor: pointer;
`;


const DiaryCanvas = ({date, title, emotion}) => {
    
    const [stroke, setStroke] = useState(1);
    const [color, setColor] = useState("#2c2c2c");
    const [imgurl, setImgUrl] = useState('');

    let canvas; 
    let canvasRef = createRef();
    let ctx;

    let pos = {
        drawble: false,
        X: -1, 
        Y: -1
    };

    useEffect(()=>{
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        canvas.addEventListener("mousedown", initDraw);
        canvas.addEventListener("mousemove", draw);
        canvas.addEventListener("mouseup", finishDraw);
        canvas.addEventListener("mouseout", finishDraw);
    },[]);

    useEffect(()=>{
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        ctx.lineWidth  = stroke;
    },[stroke]);

    useEffect(()=>{
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        ctx.strokeStyle=color;
        ctx.fillStyle=color;
    },[color]);

    const initDraw = (e) =>{
        ctx.beginPath();
        pos = {drawble: true, ...getPosition(e)};
        ctx.moveTo(pos.X, pos.Y);
    };

    const draw = (e) => {
        if(pos.drawble){
            pos = {...pos, ...getPosition(e)};
            ctx.lineTo(pos.X, pos.Y);
            ctx.stroke();
        }
    };
    const finishDraw = () => {
        pos = {drawble: false, X:-1, Y:-1};
    };

    const getPosition = (e) => {
        return {
            X: e.offsetX,
            Y: e.offsetY
        };
    };

    const onChangeStroke = (value) => {
        setStroke(value);
    };

    const onClickColor = (e) => {
        setColor(e.target.style.backgroundColor);
    };

    const onSave = (e) => {
        setImgUrl(document.getElementById('diarycanvas').toDataURL());
        alert("그림이 저장되었습니다!");
    };

    const onClear = () => {
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
    };

    return(
        <>
            <CanvasWrapper>
                <canvas id="diarycanvas" style={{marginLeft:"34px", marginTop:"45px"}} ref={canvasRef} width="630" height="360"/>
                
                <ColorWrapper>
                    <ColorPalette onClick={onClickColor} style={{backgroundColor:"#2c2c2c"}}/>
                    <ColorPalette onClick={onClickColor} style={{backgroundColor:"#FF3B30"}}/>
                    <ColorPalette onClick={onClickColor} style={{backgroundColor:"#FF9500"}}/>
                    <ColorPalette onClick={onClickColor} style={{backgroundColor:"#FFCC00"}}/>
                    <ColorPalette onClick={onClickColor} style={{backgroundColor:"#cee5d5"}}/>
                    <ColorPalette onClick={onClickColor} style={{backgroundColor:"#5AC8FA"}}/>
                </ColorWrapper>
                <SliderWrapper defaultValue={stroke} onChange={onChangeStroke} max={10}/>
                
                <SaveButton onClick={onSave}/>
                <ClearButton onClick={onClear}/>

            </CanvasWrapper>
            <DiaryText date={date} title={title} emotion={emotion} imgurl={imgurl}/>
        </>
    );

};

export default DiaryCanvas;