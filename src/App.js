import React from 'react';



const foodILike = [
  {
    id:1,
    name:"kimchi",
    image:"https://cms.splendidtable.org/sites/default/files/styles/w2000/public/6878019331_c6d21380b9_z.jpg?itok=QPCBvQxa"
  },
  {
    id:2,
    name:"ramen",
    image:"https://img1.daumcdn.net/thumb/R720x0/?fname=https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG"
  }
]

// function Foor(prop.fav)
function Food({ name, picture }){
  return <div>
      <h2>I Like {name}</h2>
      <img src={ picture } alt={ name }/>
    </div>
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={ dish.name } picture={ dish.image }/>
      ))}
    </div>
  );
}

export default App;
