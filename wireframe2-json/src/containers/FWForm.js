import React,{ Component,Fragment} from 'react';
import { Field, reduxForm } from "redux-form";

let FWForm = props =>{

    return (
        <form onSubmit={props.handleSubmit}>
        <div className="container">
          <div className="col-md-12">
              <label>KC:</label>
          </div>
          <div className="col-md-12">
            <Field
              name="kafnucredit"
              component="input"
              onChange={this.kafnucredit}
              maxLength="5"
            />
          </div>
          <div className="col-md-12">
                <label>BC:</label>
            </div>
            <div className="col-md-12">
              <Field
                name="bookingcredit"
                component="input"
                onChange={this.bookingcredit}
                maxLength="5"
                />
            </div>
            <div className="col-md-12">
                <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
    )
}
FWForm = reduxForm({
  form: "WFrm"
})(FWForm);
export default FWForm;
