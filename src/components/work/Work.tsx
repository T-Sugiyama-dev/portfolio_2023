import { Footer } from '../footer/footer';
import { handleElHover, handleElLeave } from "../cursor/Cursor";
import { useState, useEffect, useRef } from 'react';
import portfolio_movie from '../../video/portfolio_movie.mp4';
import '../../css/work/work.css';
import heritage from '../../images/work/heritage.jpg';
import london_city_1 from '../../images/work/london_city_1.jpg';
import london_city_2 from '../../images/work/london_city_2.jpg';
import sunset from '../../images/work/sunset.jpg';
import valletta from '../../images/work/valletta.jpg';
import tokyo_view from '../../images/work/tokyo_view.jpg';
import rclothes from '../../images/work/rclothes.png';
import sharebuy from '../../images/work/sharebuy.png';
import portfolio_2021 from '../../images/work/portfolio_2021.png';
import popeye from '../../images/header/popeye.png';

export const Work = () => {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.play();
    }
  }, [videoRef.current]);

  const [count, setCount] = useState<number>(0);
  const colList: string[] = ["work_1", "work_2", "work_3", "work_4", "work_5", "work_6", "work_7", "work_8", "work_9", "work_10"];

  const openWork = (col: string) => {
    const workContent: HTMLElement | null = document.getElementById(col);
    if(workContent) {
      workContent.classList.remove("close");
      workContent.classList.add("work");
    }
  }

  const closeWork = (col: string) => {
    const workContent: HTMLElement | null = document.getElementById(col);
    if(workContent) {
      workContent.classList.remove("work");
      workContent.classList.add("close");
    }
  }

  const playWork = () => {

    const exWorkContent: HTMLCollectionOf<Element> = document.getElementsByClassName("work");
    if(exWorkContent) {
      for(let i=0; i<exWorkContent.length; i++) {
        exWorkContent[i].classList.remove("close");
        exWorkContent[i].classList.add("close");
      }
    }

    const workContent: HTMLElement | null = document.getElementById(colList[count]);
    if(workContent) {
      workContent.classList.remove("close");
      workContent.classList.add("work");

      if(count >= colList.length - 1) {
        setCount(0);
      }else{
        setCount(count + 1);
      }
    }
  }

  return(
    <div className='work_container'>

      <div className='transition'>
        <h2 className='transition_work'>
          What I've done
        </h2>
      </div>

      <div className='work_wrapper'>

        <div id="work_1" className="close work_1">
          <img src={london_city_1} alt="work photo" />
        </div>

        <div id="work_2" className="close work_2">
          <img src={heritage} alt="work photo" />
        </div>

        <div id="work_3" className="close work_3">
          <img src={sharebuy} alt="work webapp" />
        </div>

        <div id="work_4" className="close work_4">
          <img src={sunset} alt="work photo" />
        </div>

        <div id="work_5" className="close work_5">
          <div className='video_wrapper'>
            <video ref={videoRef} preload="auto"  poster={popeye} autoPlay loop muted playsInline >
              <source src={portfolio_movie} type="video/mp4" />
              <p className="error_video">Your browser doesn't support HTML5 video.</p>
            </video>
          </div>
        </div>

        <div id="work_6" className="close work_6">
          <img src={london_city_2} alt="work photo" />
        </div>

        <div id="work_7" className="close work_7">
          <img src={portfolio_2021} alt="work website" />
        </div>

        <div id="work_8" className="close work_8">
          <img src={valletta} alt="work photo" />
        </div>

        <div id="work_9" className="close work_9">
          <img src={rclothes} alt="work webapp" />
        </div>

        <div id="work_10" className="close work_10">
          <img src={tokyo_view} alt="work photo" />
        </div>

      </div>

      <div className='col_wrapper'>

        <div
          onMouseEnter={() => openWork("work_1")}
          onMouseLeave={() => closeWork("work_1")}
          className='col col_1'
        >
        </div>

        <div
          onMouseEnter={() => openWork("work_2")}
          onMouseLeave={() => closeWork("work_2")}
          className='col col_2'
        >
        </div>

        <div
          onMouseEnter={() => openWork("work_3")}
          onMouseLeave={() => closeWork("work_3")}
          className='col col_3'
        >
        </div>

        <div
          onMouseEnter={() => openWork("work_4")}
          onMouseLeave={() => closeWork("work_4")}
          className='col col_4'
        >
        </div>

        <div
          onMouseEnter={() => openWork("work_5")}
          onMouseLeave={() => closeWork("work_5")}
          className='col col_5'>
        </div>
        
        <div
          onMouseEnter={() => openWork("work_6")}
          onMouseLeave={() => closeWork("work_6")}
          className='col col_6'
        >
        </div>

        <div
          onMouseEnter={() => openWork("work_7")}
          onMouseLeave={() => closeWork("work_7")}
          className='col col_7'
        >
        </div>
        
        <div 
          onMouseEnter={() => openWork("work_8")}
          onMouseLeave={() => closeWork("work_8")}
          className='col col_8'
        >
        </div>
        
        <div
          onMouseEnter={() => openWork("work_9")}
          onMouseLeave={() => closeWork("work_9")}
          className='col col_9'
        >
        </div>

        <div
          onMouseEnter={() => openWork("work_10")}
          onMouseLeave={() => closeWork("work_10")}
          className='col col_10'
        >
        </div>

      </div>

      <div className='work_title_wrapper'>
        <h1 
          onMouseEnter={handleElHover}
          onMouseLeave={handleElLeave}
          className='work_title'
        >
          Work.
        </h1>
        <p
          onMouseEnter={handleElHover}
          onMouseLeave={handleElLeave}
          className='work_text'
        >
          Move cursor
        </p>
      </div>

      <div 
        onClick={playWork}
        className="work_play_btn"
      >
        <div>
          <p className="work_btn_text">Tap to</p>
          <p className="work_btn_title"><b>Play</b></p>
        </div>
      </div>

      <Footer />

    </div>
  );
}