import React from 'react';
import { throttle } from 'lodash';
import '../css/new.css';
import styled from 'styled-components';

const H2 = styled.h2`
    width: 200px;
    margin: 0 auto;
`;

export default function MyPage() {
    let throttleFunc = throttle(() => {
        console.log('Throttle API Call');
    }, 1000);

    return (
        <>
            <H2>검색어 입력</H2>
            <input type="text" onChange={throttleFunc} />
        </>
    );
}
