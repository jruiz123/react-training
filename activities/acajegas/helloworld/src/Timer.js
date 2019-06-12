import React, { Component } from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: new Date().toLocaleTimeString(),
      name: '',
      email: ''
    }

    this.updateField = this.updateField.bind(this);
  }
  
  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleTimeString()
      })
    },1000);
  }
  
  updateField(event) {
    const val = event.target.name;
    this.setState({ [val]: event.target.value});
  };
  
  
  render() {
    return (
      <div>
        <div class="row justify-content-md-center">
          <div class="col-md-auto">
            <h2>{this.state.curTime}</h2>
          </div>
        </div>
        <br />
        <form>
          <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" name="name" class="form-control" id="name" placeholder="Enter your name" onChange={this.updateField}/>
                </div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" name="email" class="form-control" id="email" placeholder="name@example.com" onChange={this.updateField}/>
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="name1">Name</label>
                  <input type="text" name="name1" class="form-control" id="name" value={this.state.name}/>
                </div>
                <div class="form-group">
                  <label for="email1">Email address</label>
                  <input type="email" class="form-control" id="email1" value={this.state.email} />
                </div>
              </div>
          </div>
        </form>
      </div>
    );
  }
}
 
export default Timer;