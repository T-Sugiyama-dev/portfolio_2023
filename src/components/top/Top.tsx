import React, { useState, useEffect } from "react";
import { Chat } from "./Chat";
import { Transition } from "../transition/Transition";
import { Footer } from "../footer/footer";
import './top.css'

const roleList: string[] = [
  "photographer",
  "software engineer",
  "designer",
  "videographer"
];

export const Top: React.FC = () => {
  
  const [role, setRole] = useState<string>(roleList[0]);

  const moveText = (num: number) => {
    let square: HTMLCollectionOf<Element> = document.getElementsByClassName('square');
    square[num].classList.add("rubberBand");
    square[num].addEventListener("animationend", function(){
      square[num].classList.remove("rubberBand");
    }, false);
  }

  useEffect(() => {
    let index = 0;
    const changeText = () => {
      const roleElement: HTMLElement | null = document.getElementById("role");
      
      roleElement?.classList.add("word_rotate_out");
  
      const setNewText = () => {
        setRole(roleList[index]);
        roleElement?.classList.remove("word_rotate_out");
        roleElement?.classList.add("word_rotate_in");
      }
      setTimeout(setNewText, 1000);
  
      if(index == roleList.length - 1) {
        index=0;
      }else{
        index++;
      }
    }
    const intervalId = setInterval(changeText, roleList.length * 1000);
    changeText();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return(
    <div className="top_container">

      <Transition className="transition_top" text="Just a second..." />

      <div className="bubble">

        <div className="bubble_wrapper">

          <div className="line">
            <div onMouseEnter={() => moveText(0)} className="square">H</div>
            <div onMouseEnter={() => moveText(1)} className="square">e</div>
            <div onMouseEnter={() => moveText(2)} className="square">l</div>
            <div onMouseEnter={() => moveText(3)} className="square">l</div>
            <div onMouseEnter={() => moveText(4)} className="square">o</div>
            <div>　</div>
            <div onMouseEnter={() => moveText(5)} className="square">t</div>
            <div onMouseEnter={() => moveText(6)} className="square">h</div>
            <div onMouseEnter={() => moveText(7)} className="square">e</div>
            <div onMouseEnter={() => moveText(8)} className="square">r</div>
            <div onMouseEnter={() => moveText(9)} className="square">e</div>
            <div onMouseEnter={() => moveText(10)} className="square">!</div>
          </div>
          <div className="line">
            <div onMouseEnter={() => moveText(11)} className="square" >I</div>
            <div onMouseEnter={() => moveText(12)} className="square" >'</div>
            <div onMouseEnter={() => moveText(13)} className="square" >m</div>
            <div>　</div>
            <div onMouseEnter={() => moveText(14)} className="square" > a</div>
            <div>　</div>
            <div className="roleWrapper">
              <div className="square" id="role" >{role}</div>
            </div>
            
          </div>
        </div>
      </div>

      <Chat />

      <Footer className="absolute" />
      
    </div>
  );
};

