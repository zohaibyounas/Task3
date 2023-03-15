import React from "react";
import { ImSpinner } from "react-icons/im";

function Spinner() {
  return (
    <div className="flex justify-center">
      <div>
        <ImSpinner className="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" />
      </div>
    </div>
  );
}

export default Spinner;
