import React from 'react'

function SideView() {
  return (
    <div className="w-full h-screen">
      <div
        className="bg-no-repeat bg-cover h-full py-6 px-16 flex flex-col justify-between items-center"
        style={{ backgroundColor: "#23D962" }}
      >
        {/* Hidden Logo */}
        <div style={{ visibility: "hidden" }}>
          {/* <Logo mode="dark" /> */}
        </div>

        {/* Main Logo Section */}
        <div className="mb-6 gap-4">
          <h1 className="text-white text-4xl font-bold">Logo</h1>
        </div>

        {/* Footer Section */}
        <span className="text-white">
          Copyright &copy; {`${new Date().getFullYear()}`}{" "}
          <span className="font-semibold">App name</span>{" "}
        </span>
      </div>
    </div>
  );
}

export default SideView;
