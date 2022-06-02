import React, { useState } from "react";
import { Form } from "@altiore/form";
import Field from "./Field";

export default function FormComp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

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

  var params = new URLSearchParams();
  params.set("Name", name);
  params.set("Email", email);
  params.set("Phone", phone);
  params.set("Message", text);

  function clickHandler() {
    fetch("http://localhost:8888/Lab8/", {
      method: "POST",
      header: { "Content-Type": "application/form" },
      body: params,
    }).then((response) => {
      console.log("Complete");
      alert("Form sent, we'll call you back later :))");
    });
  }

  // 2 first with lib and second pair - without
  return (
    <div className="container-form">
      <header className="form-header">
        <h2>{props.title}</h2>
      </header>
      <Form onSubmit={handlerSubmit} id="form">
        <div className="form-row">
          <label htmlFor="name">
            <span className="input-hint">Your name</span>
            <input
              name="name"
              validators={[checkLength]}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label htmlFor="email">
            <span className="input-hint">Your email</span>
            <input
              name="email"
              validators={[checkEmail]}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label htmlFor="phone">
            <span className="input-hint">Your phone</span>
            <input
              name="phone"
              validators={[checkPhone]}
              onChange={(event) => setPhone(event.target.value)}
            />
          </label>
          <label htmlFor="checkbox" className="checkbox">
            <input type="checkbox" name="isTrue" required />
            <span className="privacy-hint">
              Agreed with <a href="#">Privacy and policy</a>
            </span>
          </label>
          <label htmlFor="text-area">
            <p className="privacy-hint">Write your problem here:</p>
            <textarea
              name="text-area"
              required
              onChange={(event) => setText(event.target.value)}
            />
          </label>
          <button type="submit" onClick={clickHandler} id="button-cont">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}
