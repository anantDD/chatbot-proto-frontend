import React, { Component } from "react";
import "./App.css";

// function get(url) {
//   /*
//   Use the Fetch API to GET a URL.
//   Return the fetch.

//   Your code goes here!
//    */
//   return fetch(url);
// }

// /**
//  * Performs an XHR for a JSON and returns a parsed JSON response.
//  * @param  {String} url - The JSON URL to fetch.
//  * @return {Promise}    - A promise that passes the parsed JSON response.
//  */
// function getJSON(url) {
//   /*
//   Return a Promise that gets a URL and parses the JSON response. Use your get method!

//   Your code goes here!
//    */
//   return get(url)
//     .then(response => response.json())
//     .catch(err => err);
// }

// let userName = "";
// function getDoc(url) {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log(JSON.parse(this.responseText));
//     }
//   };
//   xhttp.open("GET", url, true);
//   xhttp.send();
// }
function postDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "demo_post.asp", true);
  xhttp.send();
}

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };

//     this.handleChange = this.handleChange.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleName = this.handleName.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }
//   handleName() {
//     console.log(this.state.value);
//   }

//   render() {
//     return (
//       <form
//         onSubmit={() => {
//           console.log("hi");
//         }}
//       >
//         <label>
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="Start chatting!" />
//       </form>
//     );
//   }
// }
let userNameOUT = "";

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getDoc(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.responseText));
        console.log(this);
        console.log("hi");
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  // handleSubmit(event) {
  //   let url = "http://localhost:1337/messages";
  //   let msg = "";
  //   url += msg;
  //   // alert("A name was submitted: " + this.state.value);
  //   // console.log(fetch(url));
  //   getDoc(url);
  //   event.preventDefault();
  // }

  render() {
    this.getDoc("http://localhost:1337/messages");
    // console.log(mesgs);
    return (
      <div id="chat">
        <div className="chatBox">{}</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        Sending messages as {this.props.username}
      </div>
    );
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      username: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    // userNameOUT = this.state.value;
    this.setState({
      username: this.state.value,
      value: ""
    });
    document.getElementsByClassName("nameForm")[0].style.display = "none";
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="nameForm">
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Start Chatting" />
        </form>
        <ChatForm className="chatform" username={this.state.username} />
      </div>
    );
  }
}

class App extends Component {
  // handleNameSubmit() {
  //   let name = "anant";
  //   this.setState({
  //     username: name
  //   });
  //   console.log(this.state.username);
  // }
  render() {
    return (
      <div className="App">
        <h4>Please choose your username</h4>
        <NameForm />
        <p id="demo" />
      </div>
    );
  }
}

export default App;
