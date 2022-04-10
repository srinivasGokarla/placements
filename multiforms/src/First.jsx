import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const First = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
      <p>How can we reach you?</p>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email"
          value={props.email} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default First;
