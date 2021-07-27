import React from 'react';
/******************************************************************************
 state를 사용하는 이유?
 ---> 사용자의 동작에 따라 동적으로 데이터를 바꿀 수 있도록 하기 위함
 ********************************************************************************/



class App extends React.Component{

    // state로 동적 데이터 받아서 사용하기
    state = {
        count : 0,
    };

// state 키값에 초기값에서 Add버튼을 누르면 +, Minus버튼을 누르면 - 시키는 함수
    add = () => {
        console.log('add');

        //숫자증감시키기 시도 1 : 리액트는 state를 직접 변경하는 코드를 허용하지 않는다
        //this.state.count = 1; // WARNING:   Do not mutate state directly. Use setState()  react/no-direct-mutation-state

        //숫자증감시키기 시도 2 : Use setState() 함수를 사용해서 간접적으로 변경시키기 - warning없이 가능한지만 확인
        // this.setState({count:1});

        //숫자증감시키기 시도 3
        //this.setState({count:this.state.count+1});

        //숫자증감시키기 시도 4 :  성능문제없이 state 업데이트시키기 ---> setState()함수의 인자로 함수를 전달
        this.setState(current => ({
            count:current.count+1,
        }));
    }

    minus = () => {
        console.log('minus');
        //숫자증감시키기 시도 1 : 리액트는 state를 직접 변경하는 코드를 허용하지 않는다
        //this.state.count = -1; // WARNING:   Do not mutate state directly. Use setState()  react/no-direct-mutation-state

        //숫자증감시키기 시도 2 : Use setState() 함수를 사용해서 간접적으로 변경시키기 - warning없이 가능한지만 확인
        //this.setState({count:-1});

        //숫자증감시키기 시도 3 :  성공! ---> But 직접호출하는 것은 성능문제 있을 수 있음
        //this.setState({count:this.state.count-1});

        //숫자증감시키기 시도 4 :  성능문제없이 state 업데이트시키기 ---> setState()함수의 인자로 함수를 전달
        this.setState(current => ({
            count:current.count-1,
        }));
    }

    render() {
        return (
            <div>
                <h1>the Number is : {this.state.count} </h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}


export default App;