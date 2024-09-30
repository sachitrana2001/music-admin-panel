import React from "react";
import { Oval, RotatingLines } from "react-loader-spinner";

function Button({ children, styling, loading, disabled,handleClick }) {
  return (
    <button
      className={`relative flex justify-center items-center w-full rounded-lg p-[10px] bg-[#23D962] text-white 
                  transition duration-300 ease-in-out hover:bg-[#1cbf57] 
                  hover:opacity-90 ${
                    loading || disabled ? "opacity-90 cursor-not-allowed" : ""
                  }`}
      style={{ ...styling }}
      disabled={loading || disabled}
      onClick={handleClick}
    >
      {loading && (
        <RotatingLines
          height="20"
          width="20"
          strokeColor="white"
          strokeWidth="4"
          ariaLabel="loading"
        />
      )}

      {children}

      {(loading || disabled) && (
        <div className="absolute inset-0 bg-white opacity-30 rounded-lg pointer-events-none"></div>
      )}
    </button>
  );
}

export default Button;
