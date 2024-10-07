import React from "react";
import { marked } from "marked";
import "./App.css"

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
    this.setState({markdown: "# Hello\n## Hello\n[link](freecodecamp.org)\n\n```code```\n- list item\n\n> blockquote\n\n![image](https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/02/rickroll-header.jpg)\n\n**bolded text**"});
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="input">
            {/* Thanks https://stackoverflow.com/questions/8627902/how-to-add-a-new-line-in-textarea-element for new line */}
            <textarea id="editor" onChange={(e) => {
              this.updateMarkdown(e.target.value);
            }} defaultValue="# Hello&#13;&#10;## Hello&#13;&#10;[link](freecodecamp.org)&#13;&#10;```code```&#13;&#10;- list item&#13;&#10;> blockquote&#13;&#10;[image](https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/02/rickroll-header.jpg)&#13;&#10;**bolded text**"></textarea>
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
