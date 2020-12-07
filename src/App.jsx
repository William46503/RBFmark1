import React from "react";
import Dataform from "./Component/DataInputField";
import DataOutput from "./Component/DataOutput";
import { Button, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../public/asset/App.scss";

export default function App() {
  return (
    <div className="App">
      <Dataform />
      <div className="btnSection">
        <Button inverted color="teal" className="btn">
          Add
        </Button>
        <Button inverted color="red" className="btn">
          Remove
        </Button>
        <Button inverted color="green" className="btn">
          Print Out
        </Button>
      </div>
      <section className="Output-area">
        <DataOutput />
      </section>
    </div>
  );
}
