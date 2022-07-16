import React from 'react';
import styled from "styled-components";
import PurposeList from "./PurposeList";
import Time from "./Time";
import Place from "./Place";
import Peoplenum from "./Peoplenum";
import GenderList from "./GenderList";
import PostTitle from "./PostTitle";
import PostContents from "./PostContents";
import Line from "./Line";

/* const PurposeListBox = styled.div`
  
`; */

const CreatePostBox = styled.div`
  display : flex;
  justify-content : center;

  .CreatePost {
    display : grid;
    width : 90%;
    height : auto;
    grid-gap : 5px;
    grid-template-columns : 2fr 1fr 1fr;
    grid-template-rows : 50px 50px 20px 50px 1fr 30px;
    grid-template-areas :'PurposeListBox PromTimeBox PromTimeBox'
                         'GenderBox PeopleNumBox PeopleNumBox'
                         'LineBox LineBox LineBox'
                         'PlaceBox PostTitleBox PostTitleBox'
                         'PlaceBox PostContentsBox PostContentsBox'
                         '. . SendBox';
  }

  .CreatePost div {
    
  }

  .PurposeListBox {
    grid-area : PurposeListBox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border : 1px solid #bcbcbc;
  }

  .PromTimeBox {
    grid-area : PromTimeBox;
    padding : 10px;
    border : 1px solid #bcbcbc;
  }
    
  .PeopleNumBox {
    grid-area : PeopleNumBox;
    padding : 10px;
    border : 1px solid #bcbcbc;
  }
  

  .GenderBox {
    grid-area : GenderBox;
    padding : 10px;
    border : 1px solid #bcbcbc;
  }
  
  
  .LineBox {
    grid-area : LineBox;
    padding : 1px;
    display : flex;
    justify-content : center;
  }
  

  .PlaceBox {
    grid-area : PlaceBox;
    padding : 10px;
    border : 1px solid #bcbcbc;
  }
  

  .PostTitleBox {
    grid-area : PostTitleBox;
    padding : 10px;
    border : 1px solid #bcbcbc;
  }
  

  .PostContentsBox {
    grid-area : PostContentsBox;
    padding : 10px;
    border : 1px solid #bcbcbc;
  }
  

  .SendBox {
    grid-area : SendBox;
    padding : 10px;
    border : 1px solid #bcbcbc;
  }
  
`;



function CreatePost() {
  return (
    <CreatePostBox>
      <div className="CreatePost">
        <div className="PurposeListBox"><PurposeList /></div>
        <div className="PromTimeBox"><Time /></div>
        <div className="PeopleNumBox"><Peoplenum /></div>
        <div className="GenderBox"><GenderList /></div>
        <div className="LineBox"><Line /></div>
        <div className="PlaceBox"><Place /></div>
        <div className="PostTitleBox"><PostTitle /></div>
        <div className="PostContentsBox"><PostContents /></div> 
        <div className="SendBox">SendBox</div>
      </div>
    </CreatePostBox>
    
  );
}

export default CreatePost