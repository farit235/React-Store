import React from "react";
import { Form } from "@altiore/form";
import Field from "./Field";

export default function FormComp(props) {
  const checkLength = (value) => {
    if (value && value.length < 3) {
      return "Too short";
    }
    return undefined;
  };

  const validateEmail = (value) => {
    let re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(value).toLowerCase());
  };

  const validatePhone = (value) => {
    let re = /^((\+7|7|8)+([0-9]){10})$/;
    return re.test(String(value));
  };

  const checkEmail = (value) => {
    if (!validateEmail(value)) {
      return "Not correct e-mail";
    }
    return undefined;
  };

  const checkPhone = (value) => {
    if (!validatePhone(value)) {
      return "Not correct phone";
    }
    return undefined;
  };

  const handlerSubmit = (values) => {
    console.log("handleForm", { values });
  };

  // 2 first with lib and second pair - without
  return (
    <div className="container-form">
      <header className="form-header">
        <h2>{props.title}</h2>
      </header>
      <Form onSubmit={handlerSubmit}>
        <div className="form-row">
          <label htmlFor="name">
            <span className="input-hint">Your name</span>
            <Field.String name="name" validators={[checkLength]} />
          </label>
          <label htmlFor="email">
            <span className="input-hint">Your email</span>
            <Field.String name="email" validators={[checkEmail]} />
          </label>
          <label htmlFor="phone">
            <span className="input-hint">Your phone</span>
            <Field.String name="phone" validators={[checkPhone]} />
          </label>
          <label htmlFor="checkbox" className="checkbox">
            <input type="checkbox" name="isTrue" required />
            <span className="privacy-hint">
              Agreed with <a href="#">Privacy and policy</a>
            </span>
          </label>
          <label htmlFor="text-area">
            <p className="privacy-hint">Write your problem here:</p>
            <textarea name="text-area" required />
          </label>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
}
