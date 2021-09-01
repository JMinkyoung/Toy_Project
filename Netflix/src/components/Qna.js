import React,{useState, useRef} from 'react';
import styled from 'styled-components';
import {PlusOutlined} from '@ant-design/icons';

const QnaListItem = styled.li`
    list-style-type: none;
    margin: 0 0 8px 0;
    font-size: 1.625rem;
    font-weight: 400;
`;

const QnaQuestion = styled.button`
    padding: .8em 2.2em .8em 1.2em;
    margin-bottom: 1px;
    font-weight: 400;
    position: relative;
    width: 100%;
    border: 0;
    display: block;
    text-align: left;
    background: #303030;
    color: #f2f2f2;
`;

const PlustIcon = styled(PlusOutlined)`
    position: absolute;
    right: 1em;
    top: 30%;
    height: 1em;
    width: 1em;

`;

const QnaAnswer = styled.div`
    transition: max-height .25s cubic-bezier(.5,0,.1,1);
    display: block;
    text-align: left;
    background: #303030;
    display: inline-block;
    padding: 1.2em;
    text-align: left;
`;
const Qna = () => {

    const [open, setOpen] = useState(false);

    const onClick = (e) => {
        setOpen(!open);
    };

    return(
        <>
            <QnaListItem>
                <QnaQuestion onClick={onClick}>
                    넷플릭스란 무엇인가요?
                    <PlustIcon/>
                </QnaQuestion>
                {open ? 
                (<QnaAnswer>
                    <span style={{color:"whtie"}}>
                        넷플릭스는 각종 수상 경력에 빛나는 TV 프로그램, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.
                        <br></br><br></br>저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 TV 프로그램과 영화가 제공됩니다.
                    </span>
                </QnaAnswer>)
                :
                null}


                <QnaQuestion onClick={onClick}>
                    이건 두번째 질문
                    <PlustIcon/>
                </QnaQuestion>
                {open ? 
                (<QnaAnswer>
                    <span style={{color:"whtie"}}>
                        넷플릭스는 각종 수상 경력에 빛나는 TV 프로그램, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.
                        <br></br><br></br>저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 TV 프로그램과 영화가 제공됩니다.
                    </span>
                </QnaAnswer>)
                :
                null}
            </QnaListItem>
        
        </>
    );
};

export default Qna;
