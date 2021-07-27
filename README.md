#### React   

# chapter 05, state와 클래스형 컴포넌트   

### 클래스형 컴포넌트 만들기   

1. App클래스(React가 최종 렌더링하는 단하나의 컴포넌트)가   
리액트가 제공하는 Component클래스를 반드시 상속받아야 한다    


2. JSX를 render() 함수로 리턴해야한다   
( JSX를 그냥 리턴하는 함수형 컴포넌트와 달리 )    
   

3. 이렇게 클래서형 컴포넌트를 만들어서 사용하는 이유는?    
state를 사용하기 위해서다    
   

4. 그럼 state를 사용하는 이유는?    
'사용자의 동작'에 따라 동적으로 데이터(state에 선언된 키값에 할당)를 바꿀 수 있도록 하기 위해    
   
---


### state의 값을 동적으로 변경할 때 주의할 점   

1. 리액트는 state를 직접 변경하는 코드를 허용하지 않는다   
   WARNING:   Do not mutate state directly. Use setState()  react/no-direct-mutation-state



2. Use setState() 함수를 사용해서 간접적으로 변경할 수 있다.

3. setState()함수를 직접 호출하는 것도 가능하나,    
   setState()의 인자로 함수를 전달하면 성능문제 없이 state를 업데이트 할 수 있다.   
   
직접 사용하는 방법 (성능문제 있을 수 있어서 좋은 코드가 아니다)   
```
this.setState({count:this.state.count-1});
```

setSate()에 인자로 함수를 전달하는 방법 (성능문제 없이 state를 업데이트할 수 있다.)   
```
        this.setState(current => ({
            count:current.count-1,
        }));
```


### setState()함수는 바뀐 state의 키값에 해당되는 데이터만 업데이트 한다 
setState()의 인자로 state를 전달하면? state가 완전히 새로운 state로 교체되는 것이 아니라    
1) 이전 state vs 새로운 state를 리액트가 비교
2) 바뀐 데이터만 업데이트 -> 변경대상이 아닌 키와 해당 값은 그대로 유지된다.   


그래서 리액트는 화면구성이 빠르다. 새로고침 하지않고 필요한 데이터만 업데이트 하기때문에 


---


### 생명주기 함수 : 클래스형 컴포넌트의 일생 알아보기
constructor() componentDidMount(), componentDidUpdate(), componentWillUnmount()   



###### constructor() : 클래스형 컴포넌트가 생성될 때 호출된다.   
render()함수보다 먼저 실행되는 함수, 클래스형 컴포넌트가 생성될 때 호출된다. (생멍주기함수는 아니지만)   



###### componentDidMount()       
render() 다음순서로 실행됨, 기본상태로는 render 실행마다는 아니고 초기 로딩 시 render함수 뒤에 1번 실행됨   



###### componentDidUpdate()      
초기 로딩시 실행 안되고, state가 Update될 때 마다 render()함수 다음에 실행됨   



###### componentWillUnmount()       
리액트에서 컴포넌트가 죽을 때 Unmount로 분류한다. 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 만이 사용한다.      



--- 

### 컴포넌트 생명주기 정리   
1. 컴포넌트의 생명주기에 기본적으로 실행되는 함수는 실행순서대로       
   constructor() - render() - componentDidMount()       
   
    
2. 컴포넌트의 state가 업데이트될 때 마다 실행되는 함수는       
   render() - componentDidUpdate()       


3. 컴포넌트가 죽을 때 맨 마지막에 실행되는 함수는       
   componentWillUnmount() : 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 만이 사용      





   
