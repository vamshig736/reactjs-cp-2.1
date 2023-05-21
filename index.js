const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  //console.log(props)
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-buttons-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button className="like-button" buttonText="Like" />
        <Button className="comment-button" buttonText="Comment" />
        <Button className="share-button" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
