import React from "react";
import Image from "next/image";

import { HiDotsVertical } from "react-icons/hi";
import ffIcon from "@/utils/assets/images/firefox-install.png";

interface Props {}

export default function AddToMobileFirefox(props: Props) {
  return (
    <div>
      <div className="prompt-content">
        <p>
          Click the <HiDotsVertical /> icon
        </p>
        <p>Scroll down and then click:</p>
        <p>
          <Image src={ffIcon} alt="Firefox install icon" width={28} height={28} />
          Install
        </p>
      </div>
    </div>
  );
}
