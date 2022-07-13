import React from 'react';
import PurposeList from "./PurposeList";
import Time from "./Time";
import Place from "./Place";
import Peoplenum from "./Peoplenum";
import Gender from "./Gender";
import PostTitle from "./PostTitle";
import PostContents from "./PostContents";

function CreatePost() {
  return (
    <div classname="CreatePost">
      <div>
        <PurposeList />
      </div>
      <div>
        <Time />
      </div>
      <div>
        <Place />
      </div>
      <div>
        <Peoplenum />
      </div>
      <div>
        <Gender />
      </div>
      <div>
        <PostTitle />
      </div>
      <div>
        <PostContents />
      </div>
    </div>
  );
}

export default CreatePost