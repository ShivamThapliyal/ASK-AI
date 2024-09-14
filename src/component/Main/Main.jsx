import React, { useContext } from "react";
import "../Main/main.css";
import { assets } from "../../assets/Images/assets";
import Text from "./Text";
import { Context } from "../../context/Context";

function Main() {
  const {
    input,
    setinput,
    onsent,
    show,
    data,
    Question,
    loading,
    setquestion,
  } = useContext(Context);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onsent();
    }
  };

  return (
    <div className="main">
      <div className="main-top">
        <p>GEMINI</p>
        <img src={assets.icon} alt="User Icon" />
      </div>

      <div className="container">
        {show ? (
          <>
            <div className="greet">
              <Text />
            </div>
            <div className="cards">
              <div className="card">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <img src={assets.compass_icon} alt="Compass Icon" />
              </div>
              <div className="card">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <img src={assets.message_icon} alt="Message Icon" />
              </div>
              <div className="card">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <img src={assets.code_icon} alt="Code Icon" />
              </div>
              <div className="card">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <img src={assets.bulb_icon} alt="Bulb Icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.icon_2} alt="" />
              <p>{Question}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: data }} />
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search">
            <input
              onChange={(e) => setinput(e.target.value)}
              onKeyDown={handleKeyDown}
              value={input}
              type="text"
              placeholder="write here........"
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.message_icon} alt="Message Icon" />
              <img
                onClick={() => onsent()}
                src={assets.send_icon}
                alt="Send Icon"
              />
            </div>
          </div>
          <p className="info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
