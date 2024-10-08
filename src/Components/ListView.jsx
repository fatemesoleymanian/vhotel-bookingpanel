import React from "react";
const ListView = ({ className }) => {
  return (
    <div className={`p-4 ${className}`}>
      <div className="mb-4">List of Homes</div>
      {/* Sample list items */}
      <div className="border p-4 mb-2">Home 1</div>
      <div className="border p-4 mb-2">Home 2</div>
      <div className="border p-4 mb-2">Home 3</div>
    </div>
  );
};

export default ListView;
