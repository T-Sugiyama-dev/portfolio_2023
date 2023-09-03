import { handleElHover, handleElLeave } from "../cursor/Cursor";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import { Career } from "./Career";
import '../../css/about/resume.css'

export const Resume = () => {

  const [ref, inView] = useInView({
    // triggerOnce: true, // 一度だけトリガーする
    rootMargin: '-100px 0px', // 100px手前でトリガーする
    // threshold: 0.1,
  });

  const lineRef = useRef<HTMLDivElement>(null);

  const lineStyle: React.CSSProperties = {
    width: '2px',
    borderRadius: '5px',
    background: 'white',
    position: 'absolute',
    top: '0',
    bottom: '0',
    transition: 'height 4s',
  };

  if (lineRef.current) {
    // inViewがtrueのときに高さを変更して線を伸ばす
    lineStyle.height = inView ? `${lineRef.current.clientHeight}px` : '0';
  }
  return(
    <div ref={ref} >
      <div ref={lineRef} className="timeline_wrapper">
        <div className="timeline">
          <div style={lineStyle}></div>
        </div>
        <Career />
      </div>
    </div>
  );
}