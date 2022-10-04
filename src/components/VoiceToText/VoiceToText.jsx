import { useState } from "react";

export default function VoiceToText() {
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = new SpeechRecognition();

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    recognition.start();
    setIsSpeaking(true);
  };

  recognition.onresult = function (e) {
    let transcript = e.results[0][0].transcript;
    setResult(transcript);
  };

  return (
    <div className="App">
      <section className="voiceToText">
        <div className="voiceToText__wrapper">
          <div className="voiceToText__header-container">
            <h1 className="voiceToText__header">
              Speak here to see your words on the screen
            </h1>
          </div>
          <div className="voiceToText__textbox">
            <div className="voiceToText__wrapper">
              <p className="voiceToText__text">
                {/* Shorthand if else */}
                {isSpeaking ? "Speaking..." : "Waiting..."}
              </p>
              {/* Shorthand if */}
              <p>{result && result}</p>
            </div>
          </div>
          <div className="voiceToText__button">
            <button onClick={onClickHandler} className="voiceToText__speak">
              Click here!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
