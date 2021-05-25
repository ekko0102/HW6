import Button from '@material-ui/core/Button';
import React from 'react';
import ReactDOM from 'react-dom';

const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText = event.target.innerText + "被點了了"
}

const styleArgument = { 
  fontSize:'100px', color:'red', textAlign: 'center',
};

const styleButton = {
  marginLeft: "12%",
  justifyContent: "center",
  alignItems: "center"
};

    class CounterButton extends React.Component{
      constructor(props){
        super(props)
        this.state={counter:0}
        this.handleClick=this.handleClick.bind(this)
      }
      handleClick(event){
        this.setState({counter: this.state.counter+1});
        console.log(this.state);
      }
      render(){
        var text=this.state.counter;


        return(
          <Button onClick={this.handleClick} variant="contained" color="primary">
            你點了{text}次.
          </Button>
        );

        // return(
        
      }
    }
   

const MultiButton=(num)=>{
  var output=[];
  for(let i=1;i<num+1;++i)
  output.push(<CounterButton >第{i}個按鍵</CounterButton>)
  return output;
} 

// class CounterButton extends React.Component

export default MultiButton;