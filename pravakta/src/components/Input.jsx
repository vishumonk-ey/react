import React from "react";

function input({ value, setValue, placeholder, label, id }) {
  return (
    <div className="w-full ">
      <label htmlFor={id} className="block font-normal">{label} :</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        aria-label={id}
        className="rounded-md bg-[#F9FAFB] w-full px-4 mt-1 py-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // pattern="^\d+$"
      />
    </div>
  );
}

export default input;
