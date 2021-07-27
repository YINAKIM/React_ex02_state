import React from 'react';
/******************************************************************************

클래스형 컴포넌트 만들기1. 리액트가 제공하는 Component클래스를 반드시 상속
클래스형 컴포넌트 만들기2. render()함수로 JSX를 반환 ( -> 함수형 컴포넌트와 클래스형컴포넌트의 차이점)

클래스형 컴포넌트는 왜쓰지? state를 사용하기 위해서
********************************************************************************/



class App extends React.Component{
    // [1] 상속으로 React.Component의 기능을 추가한 App 컴포넌트

    // [3] state 사용(클래스형 컴포넌트로 만드는 목적)
    state = {
        count : 10,
    };

    // [2] render()함수로 JSX를 반환
    render() {
        return <h1>the Number is : {this.state.count} </h1>;
    }
}

export default App;
