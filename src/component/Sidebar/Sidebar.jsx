import React, { useContext, useState } from "react";
import "../Sidebar/sidebar.css";
import { assets } from "../../assets/Images/assets";
import { Context } from "../../context/Context";
function Sidebar() {
  const { onsent, prevquestion, setQuestion, newchat } = useContext(Context);

  const [hide, sethide] = useState(false);
  const toggel = () => {
    sethide(!hide);
  };
  const loadquestion = async (prompt) => {
    setQuestion(prompt);
    await onsent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="side-top">
        <img onClick={toggel} src={assets.sidebar_open_close} />
        {hide ? (
          <div className="New-chat">
            <img onClick={newchat} src={assets.plus_icon} />
            <p>New Chat</p>
          </div>
        ) : null}
        {hide ? (
          <div className="recent">
            <div className="recentTitle">Recent</div>
            {prevquestion.map((item, index) => {
              return (
                <div onClick={() => loadquestion(item)} className="message">
                  <img src={assets.message_icon} alt="Message Icon" />
                  <p>{item.slice(0, 18)}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="side-bottom">
        <div className="bottom-in">
          <img src={assets.question_icon} />
          {hide ? <p>Help</p> : null}
        </div>

        <div className="bottom-in">
          <img src={assets.history_icon} />
          {hide ? <p>Activity</p> : null}
        </div>

        <div className="bottom-in">
          <img src={assets.setting_icon} />
          {hide ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
