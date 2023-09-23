import './footer.css'

interface footerProp  {
  class: string;
}

export const Footer = (props: footerProp) => {
  return(
    <footer className={`footer_${props.class}`}>
      <div className="copyright">
        <small>&copy; 2023 Takumasa Sugiyama</small>
      </div>
    </footer>
  );
}