import React from "react";
import { Form, NavLink, useActionData } from "react-router-dom";
import { InputWithLabel, Button } from "../../../modules/shared";



export default function Login() {
  const data = useActionData();
  console.log(data);
  return (
    <main className="login py-8 px-2 bg-primary">
      <section className="user_login py-8 px-8">
        <div className="section-heading text-center pb-1">
          <h1 className="font-light text-lg text-tertiary">
            Login to Elimuendelezi
          </h1>
        </div>
        <hr />
        <div className="user_login__form py-8">
          <Form method="post" action="/login">
            <InputWithLabel
              name={"userId"}
              id={"username"}
              placeholder={"email or phone number"}
              required={true}
              error={{
                name:
                  data?.error && data.error.includes("Username")
                    ? data.error
                    : null
              }}
            >
              username
            </InputWithLabel>
            <InputWithLabel
              type={"password"}
              name={"password"}
              id={"password"}
              required={true}
              error={{
                name:
                  data?.error && data.error.includes("Password")
                    ? data.error
                    : null
              }}
            >
              password
            </InputWithLabel>
            <div className="forgot_password">
              <NavLink>forgot password?</NavLink>
            </div>
            <div className="form-group pt-12">
              <Button type="submit">Login</Button>
            </div>
          </Form>
        </div>
        <div className="acount_options pb-4">
          <p>
            <span className="mr-1"> New to our platform?</span>
            <NavLink to={"/register"}>Register here</NavLink>
          </p>
        </div>
      </section>
    </main>
  );
}
