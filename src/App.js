import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "<p>This is the initial content of the editor</p>",
    };
  }

  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);

    this.setState({
      content,
    });
  };

  handleSave = () => {
    console.log("content", this.state.content);
  };

  render() {
    return (
      <div>
        <div style={{ height: 700 }}>
          <Editor
            value={this.state.content}
            init={{
              height: 700,
              menubar: true,
              // plugins: [
              //   'advlist',
              //   'searchreplace visualblocks code fullscreen',
              //   'insertdatetime media table paste code help wordcount'
              // ],
              plugins: [
                "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
            
            body_class : "my_class"
            }}
            onEditorChange={this.handleEditorChange}
          />
        </div>
        <div className="action-wrap">

       
        <Button onClick={this.handleSave} color="primary">
          Create Post
        </Button>
        </div>
      </div>
    );
  }
}

export default App;
