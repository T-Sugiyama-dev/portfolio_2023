import { useState, useEffect } from "react";
import '../../css/top/top.css'

const chatList = [
  "Hi, I'm Takumasa Sugiyama.",
  "I'm currently working as a software engineer",
  "Throughout my journey, I've worn many hats including those of an engineer, designer, photographer, and videographer. ",
  "This diverse background has allowed me to gather a wide range of skills and experiences.",
  "Whether I'm diving into lines of code or composing the perfect shot, I'm always eager to explore new avenues of innovation and expression.",
  "If you'd like to get in touch, please reach out through 'contact' page."
];

export const Chat = () => {
  const [chatClass, setChatClass] = useState<string>("close");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    
    const startChatEffect = () => {
      for (let i = 0; i < chatList.length; i++) {
        const setChat = () => {
          setMessage(chatList[i]);
          setChatClass("chat_fade_in");
        }
  
        const closeChat = () => {
          setChatClass("chat_fade_out");
        }
  
        setTimeout(() => {
          setChat();
          setTimeout(closeChat, 4000);
        }, i * 6000);
      }
    };

    setTimeout(startChatEffect, 3000);

  }, []);

  return(
    <div className={`top_chat_wrapper ${chatClass}`}>
      {message}
    </div>
  );
}