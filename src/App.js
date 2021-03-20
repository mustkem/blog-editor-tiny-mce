import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Preview from "./Preview";

import "bootstrap/dist/css/bootstrap.min.css";
import "./prism.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: `<pre class="language-javascript"><code>handleEditorChange = (content, editor) =&gt; {
        console.log("Content was updated:", content);
    
        this.setState({
          content,
        });
      };</code></pre>
<blockquote>
<p>This is t<span style="color: #e03e2d;">he i</span>nitial <strong>content of the</strong> editor</p>
</blockquote>`,
      isPreview: false,
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

  updateMainState = (stateChunk) => {
    this.setState({
      ...this.state,
      ...stateChunk,
    });
  };

  render() {
    return (
      <div>
          <div className="action-wrap">
          <Button
            onClick={() => {
              this.setState({ isPreview: true });
            }}
          >
            Preview
          </Button>
        </div>
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

              body_class: "my_class",
            }}
            onEditorChange={this.handleEditorChange}
          />
        </div>
        <div className="action-wrap">
          <Button onClick={this.handleSave} color="primary">
            Create Post
          </Button>
        </div>
      

        <Modal dialogClassName="preview-modal" isOpen={this.state.isPreview} toggle={()=>{this.setState({isPreview:!this.state.isPreview})}} >
          <ModalHeader toggle={()=>{this.setState({isPreview:!this.state.isPreview})}}>Preview</ModalHeader>
          <ModalBody>
          <Preview
            updateMainState={this.updateMainState}
            content={this.state.content}
          />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={()=>{this.setState({
              isPreview:false
            })}}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;
