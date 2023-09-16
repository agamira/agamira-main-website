import "./CardIcon.scss";

const CardIcon = ({ logo }) => {
  return (
    <div className="card-icon">
      {!!logo && <img className="card-icon__logo" src={logo} alt="" />}
    </div>
  );
};

export { CardIcon };
