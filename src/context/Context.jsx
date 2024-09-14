import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setinput] = useState("");
  const [show, setshow] = useState(true);
  const [data, setdata] = useState("");
  const [Question, setQuestion] = useState("");
  const [prevquestion, setprevquestion] = useState([]);
  const [loading, setloading] = useState(false);

  const typing = (i, next) => {
    setTimeout(function () {
      setdata((prev) => prev + next);
    }, 100 * i);
  };
  const newchat = () => {
    setloading(false);
    setshow(true);
  };
  const onsent = async (prompt) => {
    setdata("");
    setloading(true);
    setshow(false);
    let response;
    if (prompt !== undefined) {
      response = await run(prompt);
      setQuestion(prompt);
    } else {
      setprevquestion((prev) => [...prev, input]);
      setQuestion(input);
      response = await run(input);
    }
    let array = response.split("**");
    let newresponse = "";
    for (let i = 0; i < array.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newresponse += array[i];
      } else {
        newresponse += "<b>" + array[i] + "</b>";
      }
    }
    let newarray = newresponse.split("*").join("</br>");
    let newresponse2 = newarray.split(" ");
    for (let i = 0; i < newresponse2.length; i++) {
      const text = newresponse2[i];
      typing(i, text + " ");
    }
    // setdata(newresponse);
    setloading(false);
    setinput("");
  };

  const contextvalue = {
    input,
    setinput,
    onsent,
    show,
    data,
    setdata,
    loading,
    Question,
    prevquestion,
    setQuestion,
    setprevquestion,
    newchat,
  };
  return (
    <Context.Provider value={contextvalue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
