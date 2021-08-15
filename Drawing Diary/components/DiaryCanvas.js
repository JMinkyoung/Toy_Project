import React,{createRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import {DeleteOutlined, SaveOutlined } from '@ant-design/icons';
import { Slider} from 'antd';
import 'antd/dist/antd.css';
import DiaryText from './DiaryText';

const CanvasWrapper = styled.div`
    display: flex;
`;

const EraserButton = styled.img`
    position: absolute;
    float: left;
    margin-top: 402px;
    margin-left: 528px;
    height: 36px;

    cursor: pointer;
    :hover{
        color: #cee5d5; 
    }
`;
const SaveButton = styled(SaveOutlined)`
    float: left;
    position: absolute;
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
    margin-left: 360px;
`;

const ColorWrapper = styled.div`
    float: left;
    position: absolute;
    display: flex;
    margin-top: 405px;
    margin-left: 45px;
`;

const ColorPalette = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 20px;
    border-radius: 50px;
    cursor: pointer;
`;


const DiaryCanvas = ({date, title, emotion, imgurlDone, text}) => {
    
    const [stroke, setStroke] = useState(5);
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

        if(imgurlDone !== undefined){
            setImgUrl(imgurlDone);
            let img = new Image();
            img.src = imgurlDone;
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
            };
        }
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

    const onErase = (e) => {
        setColor("white");
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
                <EraserButton onClick={onErase} src={'/images/eraser.png'}/>
                <SaveButton onClick={onSave}/>
                <ClearButton onClick={onClear}/>

            </CanvasWrapper>
            {text === undefined ?
                <DiaryText date={date} title={title} emotion={emotion} imgurl={imgurl}/> :
                <DiaryText date={date} title={title} emotion={emotion} imgurl={imgurl} textDone={text}/>
            }
        </>
    );

};

export default DiaryCanvas;