import './transition.css';

interface transitionProp  {
  class: string;
  text: string;
}

export const Transition = (props: transitionProp) => {
  return(
    <div className="transition">
      <h2 className={props.class}>{props.text}</h2>
    </div>
  );
}
