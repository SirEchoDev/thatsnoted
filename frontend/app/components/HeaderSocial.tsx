import React from "react";
import Link from "next/link"; // Add this import

const HeaderSocial = () => {
  return (
    <div className="">        
      <Link href="https://www.facebook.com">
        <img className="width-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" />
      </Link>
    </div>
  );
};

export default HeaderSocial;
