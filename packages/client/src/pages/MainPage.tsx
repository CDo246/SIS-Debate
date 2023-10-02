import React, { useState } from "react";
import OptionsModal from "./OptionsModal.tsx";
import "../index.css";
import TypingText from "../assets/TypingText";
import leftAvatar from "./left-avatar.jpg";
import rightAvatar from "./right-avatar.jpg";

export function MainPage() {
  const leftAvatarUrl = leftAvatar; // Left and right side Avatar URLS can be adjusted here
  const rightAvatarUrl = rightAvatar;

  const [messages, setMessages] = useState<
    { text: string; isRight: boolean; avatarUrl: string }[]
  >([]);
  const [message, setMessage] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [submittedTopic, setSubmittedTopic] = useState<string>("");

  const handleSend = () => {
    if (message.trim() !== "") {
      const newMessage = {
        text: message,
        isRight: messages.length % 2 === 0,
        avatarUrl: messages.length % 2 === 0 ? rightAvatarUrl : leftAvatarUrl,
      }; // Checking whether message is sent by right or left bot
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };
  const handleSubmit = (
    e:
      | React.KeyboardEvent<HTMLTextAreaElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (submittedTopic) {
      setTopic(submittedTopic.trim());
      const field = document.getElementById("TopicField") as HTMLInputElement;
      field.value = "";
    }
  };
  return (
    <>
      <div className="mx-auto lg:w-7/12 lg:min-w-[900px] mb-24 p-4">
        <div className="border min-h-[65vh] overflow-y-auto dark:border-gray-500 rounded-lg p-4 shadow-md grow">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.isRight ? "justify-end" : "justify-start"
              } py-1`}
            >
              {!msg.isRight && ( // Placing left side avatars before chat bubbles, and right side avatars after chat bubbles
                <img
                  src={leftAvatarUrl}
                  alt="Profile Picture"
                  className="w-8 h-8 rounded-full mr-2" // Adjust 'mr-2' as required for margin purposes
                />
              )}
              <div
                className={`${
                  msg.isRight
                    ? "bg-blue-100 dark:bg-blue-950 dark:text-white"
                    : "bg-gray-100 dark:bg-gray-800 dark:text-white"
                } p-2 rounded-lg inline-block max-w-xl`}
              >
                <TypingText text={msg.text} speed={35} />{" "}
                {/* Speed can be adjusted to be faster/slower if needed - lower number is faster*/}
              </div>
              {msg.isRight && (
                <img
                  src={rightAvatarUrl}
                  alt="Profile Picture"
                  className="w-8 h-8 rounded-full ml-2" // Adjust 'ml-2' as required for margin purposes
                />
              )}
            </div>
          ))}
        </div>
        <p className="dark:text-white my-2 text-center">
          {topic && (
            <span className="font-bold" id="TopicSpan">
              Topic:
            </span>
          )}{" "}
          {topic}
        </p>
        {/* <div className="mt-4">
          <input
            type="text"
            className="w-full p-2 rounded-lg border"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
            onClick={handleSend}
          >
            Send
          </button>
        </div> */}
        {/* input for testing purposes */}
      </div>
      <div className="flex justify-center">
        <form
          name="TopicForm"
          id="TopicForm"
          onSubmit={handleSubmit}
          className="fixed shadow-lg lg:w-1/2 h-24 w-11/12 m-2 p-2 space-x-2 justify-center rounded-md bottom-0 bg-white/75 dark:bg-gray-800/75 flex"
        >
          <textarea
            name="Enter Topic"
            id="TopicField"
            placeholder="Enter Topic Here...."
            onChange={(e) => setSubmittedTopic(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter" && !e.shiftKey) handleSubmit(e);
            }}
            className="resize-none max-w-screen-lg flex-grow box-border bg-transparent dark:text-white"
          ></textarea>
          <div className="flex flex-col">
            <OptionsModal />
            <button
              name="Submit"
              type="submit"
              className="ml-auto self-end bg-blue-950 text-white rounded-lg"
            >
              Go!
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
