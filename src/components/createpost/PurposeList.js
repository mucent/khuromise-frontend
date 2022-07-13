import React, {useState, purposeef} from 'react';

function PurposeList() {
  
  const [purposes, setPur] = useState([
    {
      id : 1,
      purname : '식사',
      active : true
    },
    {
      id : 2,
      purname : '운동',
      active : false
    },
    {
      id : 3,
      purname : '게임',
      active : false
    },
    {
      id : 4,
      purname : '공부',
      active : false
    },
    {
      id : 5,
      purname : '기타',
      active : false
    }
  ]);
  
  const onToggle = id => {
    setPur(
      purposes.map(purpose => 
        purpose.id === id ? { ...purpose, active: true } : { ...purpose, active: false }
        )
    );
  }
  
  function Purpose({ purpose, onToggle }) {
    return (
      <span>
        <b
          style = {{
            cursor:'pointer',
            color: purpose.active ? 'red' : 'black'
          }}
          onClick = {()=> onToggle(purpose.id)}
        >
        {purpose.purname}
        </b>
      </span>
    );
  }

  return (
    <div>
        {purposes.map(purpose => (
          <Purpose purpose={purpose} key={purpose.id} onToggle={onToggle}/>
        ))}
    </div>
  );
}

export default PurposeList;