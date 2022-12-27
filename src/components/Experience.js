import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false,
                   experiences: [],
                   newExperience: {company: '', from: '', to: '', role: ''}}
  }

  toggleIsEditing = (e) =>{
    this.setState({isEditing: !this.state.isEditing});
  }

  onValueChange = (e) =>{
    if(e.target.className === 'company-input'){
      this.setState({newExperience: {company: e.target.value,
                                    from: this.state.newExperience.from,
                                    to: this.state.newExperience.to,
                                    role: this.state.newExperience.role,}});
    }
    else if(e.target.className === 'from-input'){
      this.setState({newExperience: {company: this.state.newExperience.company,
                                    from: e.target.value,
                                    to: this.state.newExperience.to,
                                    role: this.state.newExperience.role}});
    }
    else if(e.target.className === 'to-input'){
      this.setState({newExperience: {company: this.state.newExperience.company,
                                    from: this.state.newExperience.from,
                                    to: e.target.value,
                                    role: this.state.newExperience.role}});
    }
    else if(e.target.className === 'role-input'){
      this.setState({newExperience: {company: this.state.newExperience.company,
                                    from: this.state.newExperience.from,
                                    to: this.state.newExperience.to,
                                    role: e.target.value}});
    }
  }

  handleSubmit = (e) =>{
      let experiencesCopy = [...this.state.experiences];
      experiencesCopy.push(this.state.newExperience)
      this.setState( {experiences: experiencesCopy,
                      isEditing: false,
                      newExperience: {company: '', from: '', to: '', role: ''}});
  }

  render() {
    return <div className="Experience Content-container">
             <h1>Experience</h1>
             <hr></hr>
             <div className="Experience-content">
             {!this.state.isEditing &&
              <div className="content-not-editing">
                <div className="content-grid">
                  {this.state.experiences.map((experience) =>{
                    return <div className="experience" key={experience.company}>
                    <div className="experience-left">
                      <h2>{experience.company}</h2>
                      <div className="experience-dates">
                        <div>{experience.from}</div>
                        <div>-</div>
                        <div>{experience.to}</div>
                      </div>
                    </div>
                    <div className="experience-right">
                      <div className="experience-role">{experience.role}</div>
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
              <div className="experience-edit">
                <div className="field">
                  <label>Company:</label>
                  <input type='text' 
                        className="company-input"
                        autoFocus={true} 
                        value={this.state.newExperience.company} 
                        onChange={this.onValueChange}>
                  </input>
                </div>
                <div className="double-field">
                  <div className="sub-field">
                    <label>From:</label>
                    <input type='text' 
                          className="from-input"
                          autoFocus={true} 
                          value={this.state.newExperience.from} 
                          onChange={this.onValueChange}>
                    </input>
                  </div>
                  <div className="sub-field">
                    <label>To:</label>
                    <input type='text' 
                          className="to-input"
                          autoFocus={true} 
                          value={this.state.newExperience.to} 
                          onChange={this.onValueChange}>
                    </input>
                  </div>
                </div>
                <div className="field">
                    <label>Role:</label>
                    <input type='text' 
                          className="role-input"
                          autoFocus={true} 
                          value={this.state.newExperience.role} 
                          onChange={this.onValueChange}>
                    </input>
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

export default Experience;