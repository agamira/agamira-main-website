import "./OrderedList.scss";

const OrderedList = ({ texts, ...props }) => {
  return (
    <ol {...props}>
      {texts.map((text, index) => {
        return (
          !!text && (
            <li key={index}>
              <span>{text}</span>
            </li>
          )
        );
      })}
    </ol>
  );
};

export { OrderedList };
