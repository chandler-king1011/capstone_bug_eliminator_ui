import React, { Component } from 'react';

import formTitle from '../formTitle';

class ReportBugForm extends Component {
  constructor() {
  super();


  this.state = {
    bugs_title: "",
    bugs_image_one: null,
    bugs_image_two: null,
    bugs_image_three: null,
    bugs_image_four: null,
    bugs_status: "NEW",
    bugs_severity: "",
    bugs_replicable: "",
    bugs_created_date: "", 
    bugs_assigned_id: "",
    bugs_description: "",
    bugs_organization_id: ""
  }


  this.onChange=this.onChange.bind(this);
}

  onChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  
  render() {
    return(
        <div className="bug-form">
            <div className="bug-form__title-wrapper">
                {formTitle("bug-form__title", "REPORT A BUG")}
            </div>
            <form className="bug-form__form" >
                <input 
                    className="bug-form__input"
                    type="text" 
                    name="bugs_title" 
                    placeholder="Title" 
                    onChange={this.onChange} 
                    value={this.state.bugs_title} 
                />

                <select
                    className="bug-form__input" 
                    type="severity" 
                    name="bugs_severity" 
                    placeholder="Severity"
                    onChange={this.onChange}
                    value={this.state.bugs_severity}
                >
                    <option>Select the Severity</option>
                    <option value="Minor">Minor</option>
                    <option value="Medium">Medium</option>
                    <option value="Major">Major</option>
                </select>     

                <button className="bug-form__button" type="submit">Submit</button>
            </form>
        </div>
    )
}
}

/* 
bugs_title:  
bugs_image_one: 
bugs_image_two: 
bugs_image_three: 
bugs_image_four: 
bugs_status: 
bugs_severity: 
bugs_replicable: 
bugs_created_date: 
bugs_assigned_id: 
bugs_description:
bugs_organization_id: 
*/

export default ReportBugForm;