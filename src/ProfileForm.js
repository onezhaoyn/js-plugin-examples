import React from "react";
import FormBuilder from "antd-form-builder";
import plugin from "js-plugin";

export default () => {
  const personalInfo = {
    name: { first: "Nate", last: "Wang" },
    email: "myemail@gmail.com",
    gender: "Male",
    address: "No.1000 Some Road, Zhangjiang Park, Pudong New District",
  };

  const meta = {
    columns: 2,
    fields: [
      { key: "name.first", label: "First Name" },
      { key: "name.last", label: "Last Name" },
      { key: "gender", label: "Gender" },
      { key: "email", label: "Email" },
      { key: "address", label: "Address", colSpan: 2 },
    ],
  };

  plugin.invoke("profile.processMeta", meta, personalInfo);

  return (
    <div>
      <div layout="horizontal" style={{ width: "800px" }}>
        <h1>User Infomation</h1>
        <FormBuilder meta={meta} initialValues={personalInfo} viewMode />
      </div>
    </div>
  );
};
