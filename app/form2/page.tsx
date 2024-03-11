"use client";

import { Form, Field } from "react-final-form";
import Input from "../components/input";

export default function page() {
  let testing;
  const onSubmit = (values: any) => {
    testing = Object.entries(values).map(([key, value]) => ({ key, value }));
    console.log(testing);
  };
  return (
    <main className=" bg-white h-full">
      <div className=" bg-slate-500 md:flex  md:justify-center md:items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2  md:w-[750px] md:h-[500px]  md:rounded-3xl md:shadow-lg md:shadow-black  overflow-auto ">
        <Form
          onSubmit={onSubmit}
          initialValues={{ stooge: "larry", employed: false }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form
              onSubmit={handleSubmit}
              className="h-full flex flex-col gap-6 pt-10 "
            >
              <div className="flex justify-between">
                <label>First Name</label>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="flex justify-between">
                <label>Last Name</label>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex justify-between">
                <label>Employed</label>
                <Field name="employed" component="input" type="checkbox" />
              </div>
              <div className="flex justify-between">
                <label>Favorite Color</label>
                <Field name="favoriteColor" component="select">
                  <option />
                  <option value="#ff0000">❤️ Red</option>
                  <option value="#00ff00">💚 Green</option>
                  <option value="#0000ff">💙 Blue</option>
                </Field>
              </div>
              <div className="flex justify-between">
                <label>Toppings</label>
                <Field name="toppings" component="select" multiple>
                  <option value="chicken">🐓 Chicken</option>
                  <option value="ham">🐷 Ham</option>
                  <option value="mushrooms">🍄 Mushrooms</option>
                  <option value="cheese">🧀 Cheese</option>
                  <option value="tuna">🐟 Tuna</option>
                  <option value="pineapple">🍍 Pineapple</option>
                </Field>
              </div>
              <div className="flex justify-between gap-4">
                <label>Sauces</label>
                <div className="">
                  <label>
                    <Field
                      name="sauces"
                      component="input"
                      type="checkbox"
                      value="ketchup"
                    />{" "}
                    Ketchup
                  </label>
                  <label>
                    <Field
                      name="sauces"
                      component="input"
                      type="checkbox"
                      value="mustard"
                    />{" "}
                    Mustard
                  </label>
                  <label>
                    <Field
                      name="sauces"
                      component="input"
                      type="checkbox"
                      value="mayonnaise"
                    />{" "}
                    Mayonnaise
                  </label>
                  <label>
                    <Field
                      name="sauces"
                      component="input"
                      type="checkbox"
                      value="guacamole"
                    />{" "}
                    Guacamole 🥑
                  </label>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <label>Best Stooge</label>
                <div className="flex gap-6">
                  <label>
                    <Field
                      name="stooge"
                      component="input"
                      type="radio"
                      value="larry"
                    />{" "}
                    Larry
                  </label>
                  <label>
                    <Field
                      name="stooge"
                      component="input"
                      type="radio"
                      value="moe"
                    />{" "}
                    Moe
                  </label>
                  <label>
                    <Field
                      name="stooge"
                      component="input"
                      type="radio"
                      value="curly"
                    />{" "}
                    Curly
                  </label>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <label>Notes</label>
                <Field name="notes" component="textarea" placeholder="Notes" />
              </div>
              <div className="buttons w-full flex justify-center gap-8">
                <button
                  type="submit"
                  disabled={submitting || pristine}
                  className="bg-white rounded-sm p-2"
                >
                  Submit
                </button>
                <button
                  className="bg-white rounded-sm p-2"
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <pre className="border-2">{JSON.stringify(values, null, 2)}</pre>
            </form>
          )}
        />

        <p></p>
      </div>
    </main>
  );
}
