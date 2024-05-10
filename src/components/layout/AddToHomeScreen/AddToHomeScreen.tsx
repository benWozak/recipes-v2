import React, { useState, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
import dynamic from "next/dynamic";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { FaTimes } from "react-icons/fa";

const ModuleLoading = () => <p className="animate-bounce text-white font-bold">Loading...</p>;
const AddToSafariiOS = dynamic(() => import("./AddToSafariiOS"), { loading: () => <ModuleLoading /> });
const AddToMobileChrome = dynamic(() => import("./AddToMobileChrome"), { loading: () => <ModuleLoading /> });
const AddToMobileFirefox = dynamic(() => import("./AddToMobileFirefox"), { loading: () => <ModuleLoading /> });
const AddToMobileFirefoxIos = dynamic(() => import("./AddToMobileFirefoxIos"), { loading: () => <ModuleLoading /> });
const AddToMobileChromeiOS = dynamic(() => import("./AddToMobileChromeiOS"), { loading: () => <ModuleLoading /> });
const AddToSamsung = dynamic(() => import("./AddToSamsung"), { loading: () => <ModuleLoading /> });
const OtherBrowserFallback = dynamic(() => import("./OtherBrowserFallback"), { loading: () => <ModuleLoading /> });

import useUserAgent from "@/utils/hooks/useUserAgent";

type AddToHomeScreenPromptType = "safari" | "chrome" | "firefox" | "other" | "firefoxIos" | "chromeIos" | "samsung" | "";
const COOKIE_NAME = "addToHomeScreenPrompt";

export default function AddToHomeScreen() {
  const [displayPrompt, setDisplayPrompt] = useState<AddToHomeScreenPromptType>("");
  const { userAgent, isMobile, isStandalone, isIOS } = useUserAgent();

  const closePrompt = () => {
    setDisplayPrompt("");
  };

  const doNotShowAgain = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    setCookie(COOKIE_NAME, "dontShow", { expires: date }); // Set cookie for a year
    setDisplayPrompt("");
  };

  useEffect(() => {
    const addToHomeScreenPromptCookie = getCookie(COOKIE_NAME);
    if (addToHomeScreenPromptCookie !== "dontShow") {
      // Only show prompt if user is on mobile and app is not installed
      if (isMobile && !isStandalone) {
        if (userAgent === "Safari") {
          setDisplayPrompt("safari");
        } else if (userAgent === "Chrome") {
          setDisplayPrompt("chrome");
        } else if (userAgent === "Firefox") {
          setDisplayPrompt("firefox");
        } else if (userAgent === "FirefoxiOS") {
          setDisplayPrompt("firefoxIos");
        } else if (userAgent === "chromeIos") {
          setDisplayPrompt("chromeIos");
        } else if (userAgent === "SamsungBrowser") {
          setDisplayPrompt("samsung");
        } else {
          setDisplayPrompt("other");
        }
      }
    } else {
    }
  }, [userAgent, isMobile, isStandalone, isIOS]);

  const Prompt = () => (
    <>
      {
        {
          safari: <AddToSafariiOS />,
          chrome: <AddToMobileChrome />,
          firefox: <AddToMobileFirefox />,
          firefoxIos: <AddToMobileFirefoxIos />,
          chromeIos: <AddToMobileChromeiOS />,
          samsung: <AddToSamsung />,
          other: <OtherBrowserFallback />,
          "": <></>,
        }[displayPrompt]
      }
    </>
  );

  return (
    <>
      {displayPrompt !== "" ? (
        <>
          <div className="prompt">
            <div className="prompt-wrapper text-white">
              {(displayPrompt === "chrome" || displayPrompt === "chromeIos") && <ImArrowUp className="prompt-icon animate-bounce" />}
              <div className="prompt-container">
                <button className="prompt-close" onClick={closePrompt}>
                  <FaTimes />
                </button>
                <p className="headline-5 pad-small-top">For the best experience, we recommend installing the this app to your home screen!</p>
                <Prompt />
                <button className="button" onClick={doNotShowAgain}>
                  Don&apos;t show again
                </button>
                {(displayPrompt === "firefox" || displayPrompt === "firefoxIos" || displayPrompt === "safari" || displayPrompt === "samsung") && <ImArrowDown className="prompt-icon-bottom animate-bounce" />}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
