import React, {useCallback} from "react";
import { Form } from "@altiore/form";
import Field from "./Field";
import {checkEmail, checkLength, checkPhone} from './validators';

export default function FormComp(props) {
  const handlerSubmit = useCallback((values) => {
    console.log("handleForm", { values });
  }, []);

  // 2 first with lib and second pair - without
  return (
    <div className="container-form">
      <header className="form-header">
        <h2>{props.title}</h2>
      </header>
      <Form onSubmit={handlerSubmit}>
        <div className="form-row">

          <Field.Text label="Your name" name="name" validate={checkLength} />

          <Field.Email label="Your email" name="email" validate={checkEmail} />

          <Field.Text label="Your phone" name="phone" validate={checkPhone} />

          <Field.Bool
            label={(
              <span className="privacy-hint">
                Agreed with <a href="#">Privacy and policy</a>
              </span>
            )}
            name="isTrue"
          />

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
