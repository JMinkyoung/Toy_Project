import React,{createRef, useEffect} from 'react';

const DiaryCanvas = () => {
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

    const onSave = (e) => {
        //console.log(document.getElementById('diarycanvas').toDataURL());
    };

    return(
        <>
            <canvas id="diarycanvas"style={{marginLeft:"34px", marginTop:"18px"}} ref={canvasRef} width="630" height="400"/>
            <button onClick={onSave}>저장</button>
        </>
    );

};

export default DiaryCanvas;