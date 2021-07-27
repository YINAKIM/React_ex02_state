import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
    return(
        <div>
            <h2>이름 : {name}</h2>
            <h4>평점 : {rating}/5.0</h4>
            <img src ={picture} alt={name} width="300px"/>
            <br/>
            <br/>
        </div>
    );
}


// 각 요소에 유일한 key값 넣어주기 : map()로 렌더링 될 때 반환되는 컴포넌트들 각각을 react가 식별하기 위해 key값이 필요
const foodLike = [
    {id:1, rating:5, name:'salad', image:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
    ,{id:2, rating:3,  name:'toast', image:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80'}
    ,{id:3, rating:2,  name:'icecream', image:'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',}
    ,{id:4, rating:4,  name:'fruits', image:'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',}
];

function App() {
    return(
        <div>
            <h1> props-types 사용하여 props 검사하기 </h1>
            <hr/>
            {foodLike.map(dish=>(
                    <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
                    /*********************************************************************************************************************************************
                     <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />
                                                           ---> 여기서 picture를 image라는 props name으로 불러오면 나오는 에러메세지, 그리고 사진출력도 안된다.
                      Warning: Failed prop type: The prop `picture` is marked as required in `Food`, but its value is `undefined`.
                      Food컴포넌트를 정의할 때 인자로 받아올 porps를 picture라는 이름으로 정의해뒀는데 image라는 이름으로 되어있으니 picture라는 이름의 prop은 undefined인거다. 데이터식별을 못했으니 당연히 이미지도 안나오고
                     *********************************************************************************************************************************************/
                )
            )}
        </div>
  );
}

// prop-types로 props로 들어가는 데이터 조건 검사하기
Food.propTypes ={
    name: PropTypes.string.isRequired
    ,picture:PropTypes.string.isRequired
    ,rating:PropTypes.number
    /*********************************************************************************************************************************************
    //,rating:PropTypes.string.isRequired
     여기서 검사 fail 확인하기 =>  Warning: Failed prop type: Invalid prop `rating` of type `number` supplied to `Food`, expected `string`.
     rating을 string으로 지정해뒀는데 number로 들어가서 fail된거임, 그리고 평점같은 경우 아직 평가 안했을 수 있어서 isRequired는 빼는게 좋음
     *********************************************************************************************************************************************/
};

export default App;
