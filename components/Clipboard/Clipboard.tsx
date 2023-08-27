// components/CopyToClipboard.js
import React, { useState } from "react";

const CopyToClipboard = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "ashrafulalam1000@gamil.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset copied status after 2 seconds
  };

  return (
    <div>
      <button onClick={handleCopy}>
        {copied ? "Copied Email!" : "Copy Email"}
      </button>
    </div>
  );
};

export default CopyToClipboard;
