import React from "react";

class GeneralField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: this.props.value, isEditing: false}
  }

  onValueChange = (e) =>{
    this.setState({value: e.target.value, isEditing: this.state.isEditing});
  }

  changeToEditMode = (e) =>{
    this.setState({value: this.state.value, isEditing: true});
  }

  changeToDisplayMode = (e) =>{
    if(e.target.value === ""){
      e.target.value = this.props.value;
    }
    this.setState({value: e.target.value, isEditing: false});
  }

  render() {
    if(this.state.isEditing){
      if(this.props.tag === 'p'){
        return <input type="text" autoFocus={true} value={this.state.value} onChange={this.onValueChange} 
                      onBlur={this.changeToDisplayMode}></input>
      }
      else if(this.props.tag === 'h1'){
        return <input className="H1-input" type="text" autoFocus={true} value={this.state.value} onChange={this.onValueChange} 
                      onBlur={this.changeToDisplayMode}></input>
      }
      else{
        return <input className="H2-input" type="text" autoFocus={true} value={this.state.value} onChange={this.onValueChange} 
                      onBlur={this.changeToDisplayMode}></input>
      }
    }
    if (this.props.tag === "p"){
      return <p onClick={this.changeToEditMode}>{this.state.value}</p>
    }
    else if (this.props.tag === "h1"){
      return <h1 onClick={this.changeToEditMode}>{this.state.value}</h1>
    }
    else if (this.props.tag === "h2"){
      return <h2 onClick={this.changeToEditMode}>{this.state.value}</h2>
    }
  }
}

export default GeneralField;