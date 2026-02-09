import React from "react";

// Define the props interface
interface AsideProps {
  onCreateNew: () => void;
}

function Aside({ onCreateNew }: AsideProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="border-2 border-x-transparent border-y-gray-500 my-3 py-1 ">
        <button
          className="my-4 border border-amber-100 px-2 py-1 rounded-md w-full hover:bg-amber-50 active:bg-amber-100"
          onClick={onCreateNew}
        >
          Create New
        </button>{" "}
      </div>
    </div>
  );
}

export default Aside;
