import "./Card.scss";

const Card = ({ icon, text, title, ...props }) => {
  return (
    <div {...props} className="card">
      <div className="card-box">
        {!!icon && <div className="card-box__icon">{icon}</div>}
        {!!title && (
          <div className="card-box__title">
            <h5>{title}</h5>
          </div>
        )}
        {!!text && (
          <div className="card-box__text">
            <p>{text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { Card };
