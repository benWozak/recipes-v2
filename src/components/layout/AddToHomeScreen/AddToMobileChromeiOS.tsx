import React from "react";

import { AiOutlinePlusSquare } from "react-icons/ai";
import { TbShare2 } from "react-icons/tb";

interface Props {}

export default function AddToMobileChromeiOS(props: Props) {
  return (
    <div>
      <div className="prompt-content">
        <p>
          Click the <TbShare2 /> icon
        </p>
        <p>Scroll down and then click:</p>
        <p>
          Add to Home Screen <AiOutlinePlusSquare className="text-2xl" />
        </p>
      </div>
    </div>
  );
}
