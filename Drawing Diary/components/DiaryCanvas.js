import React,{createRef, useEffect, useState} from 'react';
import DiaryText from './DiaryText';
import {CanvasWrapper, EraserButton, SaveButton, ClearButton, SliderWrapper, ColorWrapper, ColorPalette} from '../styles';


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