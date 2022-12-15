import React from "react";
import GeneralField from "./GeneralField";

class General extends React.Component {
  render() {
    return <div className="General">
              <div className="General-container">
                <GeneralField value="First Name" tag="h2"></GeneralField>
                <GeneralField value="Last Name" tag="h1"></GeneralField>
                <GeneralField value="E-Mail" tag="p"></GeneralField>
              </div>
              <div className="Address-Container General-container">
              <GeneralField value="Country" tag="p"></GeneralField>
              <GeneralField value="City" tag="p"></GeneralField>
              <GeneralField value="Address" tag="p"></GeneralField>
              </div>
           </div> 
  }
}

export default General;