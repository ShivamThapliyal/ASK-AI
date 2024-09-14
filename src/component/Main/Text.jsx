import React, { useEffect, useState } from "react";
import "../Main/main.css";

function Text() {
  const [text, settext] = useState("");
  const [istyping, setistyping] = useState(true);
  const fulltext = "Ask me anything";

  useEffect(() => {
    let index = 0;
    const typing = () => {
      if (index < fulltext.length) {
        settext(fulltext.slice(0, index + 1));
        index++;
      } else {
        setistyping(false);
        setTimeout(() => {
          settext("A");
          index = 0;
          setistyping(true);
        }, 1000);
      }
    };
    const typingInterval = setInterval(() => {
      if (istyping) {
        typing();
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [istyping]);
  return <p className="text">{text}</p>;
}

export default Text;
