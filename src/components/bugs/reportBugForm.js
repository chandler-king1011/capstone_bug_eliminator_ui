import React, { Component } from 'react';
import moment from 'moment';
import DropzoneComponent from 'react-dropzone-component';

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";


import history from '../../history';
import formTitle from '../formTitle';

class ReportBugForm extends Component {
  constructor(props) {
  super(props);


  this.state = {
    bugs_title: "",
    bugs_image_one: null,
    bugs_image_two: null,
    bugs_status: "NEW",
    bugs_severity: "Minor",
    bugs_replicable: "YES",
    bugs_created_date: moment().format(), 
    bugs_assigned_id: this.props.user.users_id,
    bugs_description: "",
    bugs_organization_id: this.props.user.users_organization_id
  }


  this.onChange=this.onChange.bind(this);
  this.onSubmit=this.onSubmit.bind(this);
  this.djsConfig=this.djsConfig.bind(this);
  this.componentConfig=this.componentConfig.bind(this);
  this.handleFirstImgDrop=this.handleFirstImgDrop.bind(this);
  this.handleSecondImgDrop=this.handleSecondImgDrop.bind(this);


  this.firstRef = React.createRef();
  this.secondRef = React.createRef();
}



handleFirstImgDrop() {
      return {
          addedfiles: file => this.setState({bugs_image_one: file[0]})
      }
  }

handleSecondImgDrop() {
    return {
        addedfiles: file => this.setState({bugs_image_two: file[0]})
    }
}



  componentConfig() {
        return {
            iconFiletypes: [".jpg", ".png"],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post" 
        }
  }


  djsConfig() {
        return {
            addRemoveLinks: false,
            maxFiles: 1
        }
  }

  onChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  onSubmit(e) {
      e.preventDefault();
      let formData = new FormData();
      formData.append("bugs_title", this.state.bugs_title);
      formData.append("bugs_status", this.state.bugs_status);
      formData.append("bugs_severity", this.state.bugs_severity);
      formData.append("bugs_replicable", this.state.bugs_replicable);
      formData.append("bugs_created_date", moment().format());
      formData.append("bugs_assigned_id", this.state.bugs_assigned_id);
      formData.append("bugs_description", this.state.bugs_description);
      formData.append("bugs_organization_id", this.state.bugs_organization_id);
  
      if (this.state.bugs_image_one != null) {
        formData.append("bugs_image_one", this.state.bugs_image_one);
    } else {
        formData.append("bugs_image_one", null)
    }

    if (this.state.bugs_image_two != null) {
        formData.append("bugs_image_two", this.state.bugs_image_one);
    } else {
        formData.append("bugs_image_two", null)
    }

    this.props.reportBug(formData, this.props.token);
  }

  
  render() {
    return(
        <div className={`bug-form ${this.props.className}`}>
            
            {this.props.error.length > 0 ? 
            <div className="bug-form__report-error">{this.props.error}</div>
            : null}
            {this.props.message.length === 0 ?
            <form className="bug-form__form" onSubmit={this.onSubmit}>
                <div className="bug-form__input-group">
                    <label className="bug-form__label">Title</label>
                    <input 
                        className="bug-form__input"
                        type="text" 
                        name="bugs_title" 
                        placeholder="Title" 
                        onChange={this.onChange} 
                        value={this.state.bugs_title} 
                    />
                </div>

                <div className="bug-form__input-group">
                    <label className="bug-form__label">Severity</label>
                    <select
                        className="bug-form__input" 
                        type="severity" 
                        name="bugs_severity" 
                        placeholder="Severity"
                        onChange={this.onChange}
                        value={this.state.bugs_severity}
                    >
                        <option value="Minor">Minor</option>
                        <option value="Medium">Medium</option>
                        <option value="Major">Major</option>
                    </select>    
                </div> 

                <div className="bug-form__input-group">
                    <label className="bug-form__label">Replicable</label>
                    <select
                        className="bug-form__input" 
                        type="replicable" 
                        name="bugs_replicable" 
                        placeholder="Severity"
                        onChange={this.onChange}
                        value={this.state.bugs_replicable}
                    >
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>    
                </div> 

                <div className="bug-form__input-group">
                    <label className="bug-form__label">Description</label>
                    <textarea 
                        className="bug-form__input bug-form__description"
                        placeholder="Describe the Bug"
                        value={this.state.bugs_description}
                        onChange={this.onChange}
                        name="bugs_description"
                        type="description"
                    />
                </div>

                <div className="bug-form__dropzones">
                    <DropzoneComponent 
                        ref={this.firstRef}
                        config={this.componentConfig()}
                        djsConfig={this.djsConfig()}
                        eventHandlers={this.handleFirstImgDrop()}
                    >
                            <div className="dz-message">Add Image</div>
                    </DropzoneComponent>
                    { this.state.bugs_image_one === null ? 
                    <div className="bug-form__add-image-wrapper"> 
                        <div className="bug-form__add-image">Add Images</div>
                    </div>
                    :
                    <DropzoneComponent 
                            ref={this.secondRef}
                            config={this.componentConfig()}
                            djsConfig={this.djsConfig()}
                            eventHandlers={this.handleSecondImgDrop()}
                        >
                                <div className="dz-message">Add Image</div>
                    </DropzoneComponent>
                    }
                </div>

                <button className="bug-form__button" type="submit">Submit</button>
            </form> 
            : <div className="bug-form__response">
                <div className="bug-form__response-message">{this.props.message}</div>
                    <div className="bug-form__response-links">
                        <a  className="bug-form__response-link" onClick={() => history.push("/user-dashboard")}>Return to Dashboard</a>
                    </div>
                </div>
            }
        </div>
    )
}
}


export default ReportBugForm;