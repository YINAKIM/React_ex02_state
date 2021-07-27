import React from 'react';

class App extends React.Component{

    // 클래스형 컴포넌트 생성시 render보다 먼저 실행되는 함수
    constructor(props) { //props없어도 실행은 됨
        super(props);
        console.log('constructor 실행!');
    }

    // render() 다음순서로 실행됨, 기본상태로는 render 실행마다는 아니고 초기 로딩 시 render함수 뒤에 1번 실행됨
    componentDidMount() {
        console.log('componentDidMoiunt 실행---------');
    }

    // 초기 로딩시 실행 안되고, state가 Update될 때 마다 render()함수 다음에 실행됨
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate 실행 - just Update');
    }


    // 리액트에서 컴포넌트가 죽을 때 Unmount로 분류한다. 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 만이 사용한다.
    componentWillUnmount() {
        console.log('componentWillUnmount 실행 --- 컴포넌트 죽음');
    }

    state = {
        count : 0,
    };

    add = () => {
        console.log('add');

        this.setState(current => ({
            count:current.count+1,
        }));
    }

    minus = () => {
        console.log('minus');

        this.setState(current => ({
            count:current.count-1,
        }));
    }

    render() {
        console.log('render()실행!');
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