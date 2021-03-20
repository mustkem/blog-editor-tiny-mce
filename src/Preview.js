import React from "react";
import { Button } from "reactstrap";
import Prism from "prismjs"

function Preview({ content, updateMainState }) {
    React.useEffect(()=>{
        setTimeout(() => Prism.highlightAll(), 0)
    })
  return (
    <div>
      <Button
        onClick={() => {
          updateMainState({ isPreview: false });
        }}
      >
        Close
      </Button>
      <div dangerouslySetInnerHTML={{__html: content}}>
      </div>
    </div>
  );
}

export default Preview;
