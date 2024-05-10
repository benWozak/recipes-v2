import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdAddToHomeScreen } from "react-icons/md";

interface Props {}

export default function AddToMobileChrome(props: Props) {
  return (
    <div>
      <div className="prompt-content">
        <p>
          Click the <HiDotsVertical /> icon
        </p>
        <p>Scroll down and then click:</p>
        <p>
          <MdAddToHomeScreen /> Add to Home Screen
        </p>
      </div>
    </div>
  );
}
