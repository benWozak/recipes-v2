import React from "react";

import { FaTimes, FaBars } from "react-icons/fa";
import { ImArrowDown } from "react-icons/im";
import { FiShare } from "react-icons/fi";
import { TfiPlus } from "react-icons/tfi";

interface Props {}

export default function AddToSamsung(props: Props) {
  return (
    <div>
      <div className="prompt-content">
        <p>
          Click the <FaBars /> icon
        </p>
        <p>Scroll down and then click:</p>
        <p>
          <TfiPlus /> Add page to
        </p>
        <p>Then select: Home screen</p>
      </div>
    </div>
  );
}
