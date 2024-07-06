import "./App.css";

export default function App() {
  return (
    <form>
      <h1>Contact Us</h1>
      <div className="row">
        <div className="column field">
          <label>First Name</label>
          <input name="firstName" type="text"></input>
        </div>
        <div className="column field">
          <label>Last Name</label>
          <input name="lastName" type="text"></input>
        </div>
      </div>
      <div className="row column field">
        <label>Email Address</label>
        <input name="emailAddress" type="text"></input>
      </div>
      <div className="row column field">
        <label>Query Type</label>
        <div className="query-types">
          <div className="option">
            <img src="./contact-form/icon-success-check.svg"></img>
            <div>General Enquiry</div>
          </div>
          <div className="option">
            <img src="./contact-form/icon-success-check.svg"></img>
            <div>Support Request</div>
          </div>
        </div>
      </div>
      <div className="row column field">
        <label>Message</label>
        <input name="message" type="text"></input>
      </div>
      <div className="row column field consent-section">
        <input name="consent" type="checkbox"></input>
        <div className="consent">I consent to being contacted by the team</div>
      </div>
      <div className="row">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
