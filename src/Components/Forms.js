import React, { useState, useEffect } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(
      10,
      "Password must be 8-16 characters and include both numbers and letters"
    ),
  agree: yup.boolean().oneOf([true], "Terms of service must be checked"),
});

export default function Forms() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
  });
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    agree: "",
  });

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const handleChange = (event) => {
    const { checked, value, name, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormErrors(name, valueToUse);
    setForm({ ...form, [name]: valueToUse });
  };

  const submit = (event) => {
    event.preventDefault();
    const newUser = {
      name: form.name.trim(),
      email: form.email,
      password: form.password,
      agree: form.agree,
    };

    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    schema.isValid(form).then((valid) => setDisabled(!valid));
  }, [form]);

  return (
    <Form className="forms" onSubmit={submit}>
      <div style={{ color: "red" }}>
        <p>{errors.name}</p>
        <p>{errors.email}</p>
        <p>{errors.password}</p>
        <p>{errors.agree}</p>
      </div>
      <FormGroup row>
        <Label for="exampleName" sm={2}>
          Name
        </Label>
        <Col sm={10}>
          <Input
            value={form.name}
            type="text"
            name="name"
            id="exampleName"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <Input
            value={form.email}
            type="email"
            name="email"
            id="exampleEmail"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          Password
        </Label>
        <Col sm={10}>
          <Input
            value={form.password}
            type="text"
            name="password"
            id="examplePassword"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="checkbox1" sm={2}></Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input
                onChange={handleChange}
                checked={form.agree}
                type="checkbox"
                name="agree"
                id="checkbox1"
              />{" "}
              I agree to the terms of service
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button disabled={disabled}>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}
