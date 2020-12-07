import React, { useState } from "react";
import Inputfield from "./InputField";

function Dataform() {
  const [Input, setInput] = useState("");

  const [InputObject, setInputObject] = useState({
    companyNumber: Number,
    companyInfo: {
      startYear: Number,
      startMonth: Number,
      endYear: Number,
      endMonth: Number,
      companyName: "",
      country: ""
    }
  });

  console.log(InputObject);
  const setInputHandler = (e) => {
    switch (e.target.name) {
      case "startYear":
        setInputObject({
          ...InputObject,
          startYear: e.target.value
        });
        break;
      case "startMonth":
        setInputObject({ ...InputObject, startMonth: e.target.value });
        break;
      case "endYear":
        setInputObject({ ...InputObject, endYear: e.target.value });
        break;
      case "endMonth":
        setInputObject({ ...InputObject, endMonth: e.target.value });
        break;
      case "companyName":
        setInputObject({ ...InputObject, companyName: e.target.value });
        break;
      case "country":
        setInputObject({ ...InputObject, country: e.target.value });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <form>
        <Inputfield setInput={setInputHandler} />
      </form>
    </div>
  );
}

export default Dataform;
