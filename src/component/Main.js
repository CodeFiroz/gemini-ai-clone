import React, { useState } from 'react';

const Main = () => {
  const [prompt, setPrompt] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [send, setSend] = useState(false);

  const newPrompt = () => {
    setPrompt(true);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    setSend(value.length > 1);
  };

  const handleButton = () => {
    if (inputValue.length > 1) {
      setSend(true);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div>
          <i className="bx bx-menu"></i>
          <h2>Gemini</h2>
        </div>
        <img src="https://source.unsplash.com/50x50/?animal" alt="User" />
      </div>

      <div className="chats">
        {prompt ? (
          <>
            <div className="chat">
              <img src="https://source.unsplash.com/50x50/?animal" alt="User" />
              <p>{inputValue}</p>
            </div>

            <div className="chat">
              <img src="https://img.icons8.com/?size=100&id=eoxMN35Z6JKg&format=png&color=000000" alt="Loader" />
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="startPage">
              <h1>
                <span>Hello, Firoz</span> <br />
                How can I help you today?
              </h1>
            </div>

            <div className="cards">
              <div className="card">
                <p>Settle a debate: how should you store bread?</p>
                <i className="bx bx-bulb"></i>
              </div>
              <div className="card">
                <p>Suggest a Python library to solve a problem</p>
                <i className="bx bx-code-alt"></i>
              </div>
              <div className="card">
                <p>Help me craft a text response to a friend</p>
                <i className="bx bx-pencil"></i>
              </div>
              <div className="card">
                <p>Walk me through how to apply for a new role</p>
                <i className="bx bx-compass"></i>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="chat-option">
        <div className="msg-input">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyUp={handleButton}
            onKeyDown={handleButton}
            placeholder="Enter a prompt here"
          />
          <div className="msg-icon">
            <i className="bx bx-image"></i>
            <i className="bx bx-microphone"></i>
            {send && <i className="bx bx-paper-plane" onClick={newPrompt}></i>}
          </div>
        </div>
        <p>
          Gemini may display inaccurate info, including about people, so double-check its responses.{' '}
          <a href="/">Your privacy and Gemini Apps</a>
        </p>
      </div>
    </div>
  );
};

export default Main;
