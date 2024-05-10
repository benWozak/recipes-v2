import React from "react";

import { AiOutlinePlusSquare } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

interface Props {}

export default function AddToMobileFirefoxIos(props: Props) {
  return (
    <div>
      <div className="prompt-content">
        <p>
          Click the <FaBars /> icon
        </p>
        <p>
          Scroll down and then click: Share <FiShare />
        </p>
        <p>
          Then click: Add to Home Screen <AiOutlinePlusSquare />
        </p>
      </div>
    </div>
  );
}
