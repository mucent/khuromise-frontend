import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const TimeBox = styled.div`
  display : flex;
  justify-content : center;
`;

const DateInputBox = styled.div`
  width : 50%;
  height : 100%;
  display : flex;
  justify-content : center;
`;

const TimeInputBox = styled.div`
  display : flex;
  justify-content : center;
`;

function ModTime(props) {

  const { mypost } = props;
  
  const dateRef = useRef(null);
  const noonRef = useRef(null);
  const hourRef = useRef(null);
  const minuteRef = useRef(null);

  const [dateState, setDate] = useState('');
  const [noonState, setNoon] = useState('');
  const [hourState, setHour] = useState('');
  const [minuteState, setMinute] = useState('');

  useEffect(() => {
    setDate(mypost.date);
    setNoon(mypost.noon);
    setHour(mypost.hour);
    setMinute(mypost.minute);
    props.setNoonValue(mypost.date);
    props.setHourValue(mypost.hour);
    props.setMinuteValue(mypost.minute);
    props.setDateValue(mypost.date);
  },[mypost]);
  

  const onChange1 = () => {
    props.setNoonValue(noonRef.current.value);
  };

  const onChange2 = () => {
    props.setHourValue(hourRef.current.value);
  };

  const onChange3 = () => {
    props.setMinuteValue(minuteRef.current.value);
  };

  const onChange4 = () => {
    props.setDateValue(dateRef.current.value);
  };

  return (
    <TimeBox>
      <DateInputBox>
        <input
          ref={dateRef}
          onChange={onChange4}
          type='date'
          style={{
            width : '90%',
            height : '20px',
            fontSize : '15px',
            borderStyle : 'double',
            padding : '3px'}}
            value = {props.mypost.date || ''} />
      </DateInputBox>
      <TimeInputBox>
        <select ref={noonRef} onChange={onChange1} value={props.mypost.noon}>
          <option value='오전'>오전</option>
          <option value='오후'>오후</option>
        </select>
      </TimeInputBox>
      <TimeInputBox>
        <select ref={hourRef} onChange={onChange2} value={props.mypost.hour}>
          <option value='01'>01</option>
          <option value='02'>02</option>
          <option value='03'>03</option>
          <option value='04'>04</option>
          <option value='05'>05</option>
          <option value='06'>06</option>
          <option value='07'>07</option>
          <option value='08'>08</option>
          <option value='09'>09</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
        </select>
      </TimeInputBox>
      <TimeInputBox>
        <select ref={minuteRef} onChange={onChange3} value={props.mypost.minute}>
          <option value='00'>00</option>
          <option value='05'>05</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
          <option value='25'>25</option>
          <option value='30'>30</option>
          <option value='35'>35</option>
          <option value='40'>40</option>
          <option value='45'>45</option>
          <option value='50'>50</option>
          <option value='55'>55</option>
        </select>
      </TimeInputBox>
    </TimeBox>
  );
}

export default ModTime;