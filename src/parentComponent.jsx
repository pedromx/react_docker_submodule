import React, { Component } from 'react';
import FirstChild from './firstChild';  

class ParentComponent extends Component {
  
  state = {
    isLoading: true,
    values: [],
    error: null
  }

  componentDidMount(){
    this.fetchValues();
  }
  
  fetchValues(){
  var url = "https://localhost:5001/api/values";
 
    fetch(url)
    .then(response => response.json())
    .then(json => {
      this.setState({
        values: json,
        isLoading: false,
      });
      console.log(this.setState);
    })
    .catch(error => this.setState({ error, isLoading: false }));  
  }

  render() {
    const { isLoading, values, error } = this.state;

    return (
      <h2>I'm the parent component.
        
        <FirstChild />  
        <p>I'm loading from the Backend the next data:</p>   
        
        {!isLoading ?
         (values.map(value => (<p>{value}</p>))) : 
         (<h3>Loading...</h3>)}
        </h2>
              
    );
  }
}

export default ParentComponent;