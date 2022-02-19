import React from "react";
import { reduxForm, Field } from "redux-form";

class StreamCreate extends React.Component {
  // renderInput(formProps) {
  //   return <input {...formProps.input} />;
  // }
  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div style={{ color: "red" }}>{meta.error}</div>
      </div>
    );
  }
  onSubmit(formValues) {}
  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui primary button">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};
export default reduxForm({
  form: "streamCreate",
  //validate: validate,
  validate,
})(StreamCreate);
