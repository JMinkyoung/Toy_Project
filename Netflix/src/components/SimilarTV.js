import React,{useEffect} from 'react';
import styled from 'styled-components';

const SimilarCardWrapper = styled.div`
    margin: .1em;
    height: 355px;
    border-radius: 5px;
    background-color: #2f2f2f;
`; 
const SimilarTV = ({data}) => {

    return (
        <SimilarCardWrapper>
            <img style={{width:"100%", borderRadius:"5px"}} src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}/>
            <h2>{data.name}</h2>
            <div style={{fontSize:"14px"}}>
                {data.overview.length > 80 ? data.overview.substr(0,80)+" ···" : data.overview}
            </div>
        </SimilarCardWrapper>
    );
};

export default SimilarTV;
