import React, { useEffect } from "react";
import "./ChatView.css";
import { useHistory } from "react-router-dom";
import { selectSelectedImage } from "./features/appSlice";
import { useSelector } from "react-redux";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
function ChatView() {
  const selectedImage = useSelector(selectSelectedImage);
  const history = useHistory();
  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  }, [selectedImage]);

  const exit = () => {
    history.replace("/chats");
  };

  return (
    <div className="chatview">
      <img src={selectedImage} onClick={exit} alt="" />
      <div className="chatview__timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={[
            ["#004777", 0.33],
            ["#f7b801", 0.33],
            ["#a30000", 0.33],
          ]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default ChatView;
