import React from "react";

import { TbShare2 } from "react-icons/tb";
import { AiOutlinePlusSquare } from "react-icons/ai";

interface Props {}

export default function AddToSafariiOS(props: Props) {
  return (
    <div>
      <div className="prompt-content">
        <p>
          Click the <TbShare2 /> icon
        </p>
        <p>Scroll down and then click:</p>
        <p>
          Add to Home Screen <AiOutlinePlusSquare />
        </p>
      </div>
    </div>
  );
}
