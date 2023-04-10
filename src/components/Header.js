import React from "react";

function Header() {
  return (
    <nav className="h-content w-screen bg-black text-white justify-between flex px-5">
      <h1 className="w-full my-3 text-5xl text-white" style={{fontFamily : "font-apik"}}>Lumkring</h1>
      <div className="flex gap-5 font-bold m-auto">
          <a href="#" className="hover:text-[#FFC422]">Home</a>
          <a href="#" className="hover:text-[#FFC422]">About</a>
          <a href="#" className="hover:text-[#FFC422]">Contact</a>
      </div>
    </nav>
  );
}

export default Header;
