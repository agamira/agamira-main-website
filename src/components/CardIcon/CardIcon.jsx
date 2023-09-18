import "./CardIcon.scss";

const CardIcon = ({ className = "", logo }) => {
  return (
    <div className={`card-icon ${className}`}>
      {!!logo && <img className="card-icon__logo" src={logo} alt="" />}
    </div>
  );
};

export { CardIcon };
