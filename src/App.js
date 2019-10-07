import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name:"kimchi",
    image:"https://cms.splendidtable.org/sites/default/files/styles/w2000/public/6878019331_c6d21380b9_z.jpg?itok=QPCBvQxa",
    rating:4
  },
  {
    id:2,
    name:"ramen",
    image:"https://img1.daumcdn.net/thumb/R720x0/?fname=https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    rating:4.5
  }
]

// function Foor(prop.fav)
function Food({ name, picture, rating }){
  return <div>
      <h2>I Like {name}</h2>
      <h4>{ rating }/5.0</h4>
      <img src={ picture } alt={ name }/>
    </div>
}

// PropTypes 를 이용하여 Object의 형태를 결정할 수 있다.
// npm i prop-types
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={ dish.name } 
          picture={ dish.image } 
          rating={ dish.rating }/>
      ))}
    </div>
  );
}

export default App;
