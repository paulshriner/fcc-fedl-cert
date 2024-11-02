import React from "react";
import { marked } from "marked";
import './App.css'

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

  componentDidMount() {
    let startingText = "# Hello\n## Hello\n[link](freecodecamp.org)\n\n\nHere is `inline code`\n\n```\nvar code = 0;\nvar block = 0;\n```\n- list item\n\n> blockquote\n\n![image](https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/02/rickroll-header.jpg)\n\n**bolded text**";
    this.setState({markdown: startingText});
    document.getElementById("editor").value = startingText;
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="input">
            <textarea id="editor" onChange={(e) => {
              this.updateMarkdown(e.target.value);
            }}></textarea>
            <br></br>
            <button type="button" id="clear" onClick={() => {
              document.getElementById("editor").value = "";
              this.setState({markdown: ""});
              }}>Clear Input</button>
          </div>
          {/* dangerouslySetInnerHTML is like innerHTML in JS, it allows rendering HTML */}
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
        </div>
      </div>
    );
  }
}
