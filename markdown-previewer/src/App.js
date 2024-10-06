import React from "react";
import { marked } from "marked";

export default class App extends React.Component {
  // Thanks to https://www.freecodecamp.org/news/how-to-build-a-markdown-previewer-with-react-js/ for help with marked/Markdown parsing
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    };
  }

  updateMarkdown(markdown) {
    this.setState({markdown});
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
        <div className="input">
          <textarea id="editor" onChange={(e) => {
            this.updateMarkdown(e.target.value);
          }}></textarea>
        </div>
        {/* dangerouslySetInnerHTML is like innerHTML in JS, it allows rendering HTML */}
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
        </div>
      </div>
    );
  }
}
