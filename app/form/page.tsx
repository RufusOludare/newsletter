"use client";

import { Form, Field } from "react-final-form";
import Input from "../components/input";

export default function page() {
  const initialData = {
    firstName: "John",
    phone: 20,
  };
  const onSubmit = (e: string) => {
    debugger;
  };

  const validate = (e) => {
    const errors = {};

    if (e.bio && e.bio.length < 5) {
      errors.bio = "Too short";
    }
    return errors;
  };
  return (
    <main className=" bg-white h-full">
      <div className="whiteBackground h-full bg-slate-500 gap-8 md:flex  md:justify-center md:items-center  md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:gap-8 md:w-[750px] md:h-[500px] md:p-4 md:pl-10 md:rounded-3xl md:shadow-lg md:shadow-black ">
        <Form
          onSubmit={onSubmit}
          validate={validate}
          initialValues={initialData}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="">
              <div className="min-w-[400px] flex justify-between mb-4">
                <label>First Name</label>
                <Field
                  name="firstName"
                  component="input"
                  placeholder="First Name"
                />
              </div>

              <div className="min-w-[400px] flex justify-between mb-4">
                <label>Second Name</label>
                <Field name="secondName">
                  {({ input, meta }) => (
                    <div>
                      <Input {...input} />
                      {meta.touched && meta.error && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </div>

              <div className="min-w-[400px] flex justify-between mb-4">
                <label>Phone</label>
                <Field name="phone">
                  {({ input, meta }) => (
                    <div>
                      <input
                        type="text"
                        {...input}
                        placeholder="(888) 888-88-88"
                      />
                      {meta.touched && meta.error && <div>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </div>

              <div className="min-w-[400px] flex justify-between mb-4">
                <label>Bio</label>
                <Field
                  name="bio"
                  render={({ input, meta }) => (
                    <div>
                      <textarea {...input} placeholder="Bio" />
                      {meta.touched && meta.error && <div>{meta.error}</div>}
                    </div>
                  )}
                />
              </div>

              <button type="submit" className="bg-white py-3 px-4 rounded-lg ">
                Submit
              </button>
            </form>
          )}
        />
      </div>
    </main>
  );
}
