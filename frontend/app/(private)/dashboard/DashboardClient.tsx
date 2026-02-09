"use client";
import React, { useEffect, useState } from "react";
import Aside from "../component/Aside";
import Editor from "../component/Editor";

const DashboardClient = () => {
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    const load = localStorage.getItem("saveEditor");
    if (load !== null) {
      setShowEditor(JSON.parse(load));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("saveEditor", JSON.stringify(showEditor));
  }, [showEditor]);

  return (
    <main className="grid grid-cols-[275px_auto] ">
      <aside className="bg-gray-300 h-screen p-3 ">
        <Aside onCreateNew={() => setShowEditor(true)} />
      </aside>
      <section className="">{showEditor && <Editor />}</section>
    </main>
  );
};

export default DashboardClient;
