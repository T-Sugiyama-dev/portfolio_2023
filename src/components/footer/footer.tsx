import './footer.css'

interface FooterProp  {
  className: string;
}

export const Footer: React.FC<FooterProp> = ({ className }) => {
  return(
    <footer className={`footer_${className}`}>
      <div className="copyright">
        <small>&copy; 2023 Takumasa Sugiyama</small>
      </div>
    </footer>
  );
}