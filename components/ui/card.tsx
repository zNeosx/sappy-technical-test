import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div>
          <Image
            className="object-cover rounded-xl"
            src="https://via.placeholder.com/48x48"
            alt="avatar"
            width={12}
            height={12}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
