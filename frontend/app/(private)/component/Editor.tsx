import React, { useEffect } from "react";
import Form from "./Form";

const Editor = () => {
  return (
    <div className="p-5 w-full ">
      <h2 className="text-3xl font-semibold"> New Message</h2>
      <Form />
    </div>
  );
};

export default Editor;
