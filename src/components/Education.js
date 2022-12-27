import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false,
                   educations: [],
                   newEducation: {school: '', from: '', to: '', degree: '', grade: ''}}
  }

  toggleIsEditing = (e) =>{
    this.setState({isEditing: !this.state.isEditing});
  }

  onValueChange = (e) =>{
    if(e.target.className === 'school-input'){
      this.setState({newEducation: {school: e.target.value,
                                    from: this.state.newEducation.from,
                                    to: this.state.newEducation.to,
                                    degree: this.state.newEducation.degree,
                                    grade: this.state.newEducation.grade}});
    }
    else if(e.target.className === 'from-input'){
      this.setState({newEducation: {school: this.state.newEducation.school,
                                    from: e.target.value,
                                    to: this.state.newEducation.to,
                                    degree: this.state.newEducation.degree,
                                    grade: this.state.newEducation.grade}});
    }
    else if(e.target.className === 'to-input'){
      this.setState({newEducation: {school: this.state.newEducation.school,
                                    from: this.state.newEducation.from,
                                    to: e.target.value,
                                    degree: this.state.newEducation.degree,
                                    grade: this.state.newEducation.grade}});
    }
    else if(e.target.className === 'degree-input'){
      this.setState({newEducation: {school: this.state.newEducation.school,
                                    from: this.state.newEducation.from,
                                    to: this.state.newEducation.to,
                                    degree: e.target.value,
                                    grade: this.state.newEducation.grade}});
    }
    else if(e.target.className === 'grade-input'){
      this.setState({newEducation: {school: this.state.newEducation.school,
                                    from: this.state.newEducation.from,
                                    to: this.state.newEducation.to,
                                    degree: this.state.newEducation.degree,
                                    grade: e.target.value}});
    }
  }

  handleSubmit = (e) =>{
      let educationsCopy = [...this.state.educations];
      educationsCopy.push(this.state.newEducation)
      this.setState( {educations: educationsCopy,
                      isEditing: false,
                      newEducation: {school: '', from: '', to: '', degree: '', grade: ''}});
  }

  render() {
    return <div className="Education Content-container">
             <h1>Education</h1>
             <hr></hr>
             <div className="Education-content">
             {!this.state.isEditing &&
              <div className="content-not-editing">
                <div className="content-grid">
                  {this.state.educations.map((education) =>{
                    return <div className="education" key={education.school}>
                    <div className="education-left">
                      <h2>{education.school}</h2>
                      <div className="education-dates">
                        <div>{education.from}</div>
                        <div>-</div>
                        <div>{education.to}</div>
                      </div>
                    </div>
                    <div className="education-right">
                      <div className="education-degree">{education.degree}</div>
                      <div>{education.grade}</div>
                    </div>
                  </div>
                  })}
                </div>
                <button onClick={this.toggleIsEditing}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
             }
             {this.state.isEditing &&
              <div className="education-edit">
                <div className="field">
                  <label>School:</label>
                  <input type='text' 
                        className="school-input"
                        autoFocus={true} 
                        value={this.state.newEducation.school} 
                        onChange={this.onValueChange}>
                  </input>
                </div>
                <div className="double-field">
                  <div className="sub-field">
                    <label>From:</label>
                    <input type='text' 
                          className="from-input"
                          autoFocus={true} 
                          value={this.state.newEducation.from} 
                          onChange={this.onValueChange}>
                    </input>
                  </div>
                  <div className="sub-field">
                    <label>To:</label>
                    <input type='text' 
                          className="to-input"
                          autoFocus={true} 
                          value={this.state.newEducation.to} 
                          onChange={this.onValueChange}>
                    </input>
                  </div>
                </div>
                <div className="double-field">
                  <div className="sub-field">
                    <label>Degree:</label>
                    <input type='text' 
                          className="degree-input"
                          autoFocus={true} 
                          value={this.state.newEducation.degree} 
                          onChange={this.onValueChange}>
                    </input>
                  </div>
                  <div className="sub-field">
                    <label>Grade:</label>
                    <input type='text' 
                          className="grade-input"
                          autoFocus={true} 
                          value={this.state.newEducation.grade} 
                          onChange={this.onValueChange}>
                    </input>
                  </div>
                </div>
                <div className="btn-wrapper">
                  <button className="add-btn" onClick={this.handleSubmit}><i className="fas fa-plus"></i></button>
                  <button className="close-btn" onClick={this.toggleIsEditing}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
             }
             </div>
           </div> 
  }
}

export default Education;