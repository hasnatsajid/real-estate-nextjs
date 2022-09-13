export default function Custom404() {
  return (
    <div className="error">
      <div className="wrapper">
        <div className="image">
          <img src="/images/logos/logo-long.png" />
        </div>
        <h1 className="message">
          <span className="red">This page </span>
          <span className="blue">does not exist</span>
        </h1>
      </div>
    </div>
  );
}
