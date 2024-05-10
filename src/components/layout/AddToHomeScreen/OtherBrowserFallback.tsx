import React from "react";
import Link from "next/link";

interface Props {}

export default function AddToOtherBrowser(props: Props) {
  const searchUrl = `https://www.google.com/search?q=add+to+home+screen+for+common-mobile-browsers`;

  return (
    <div>
      <div className="prompt-content">
        <p>Unfortunately, we were unable to determine which browser you are using. Please search for how to install a web app for your browser.</p>
        <b />
        <b />
        <Link className="nav-link" href={searchUrl} target="_blank">
          Try This Search
        </Link>
      </div>
    </div>
  );
}
