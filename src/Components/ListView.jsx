import React from "react";
const ListView = ({ className }) => {
  return (
    <div className={`p-4 ${className}`}>
      <div className="mb-4"> لیست هتل ها</div>
      {/* Sample list items */}
      <div className="border p-4 mb-2">هتل 1</div>
      <div className="border p-4 mb-2">هتل 2</div>
      <div className="border p-4 mb-2">هتل 3</div>
    </div>
  );
};

export default ListView;
