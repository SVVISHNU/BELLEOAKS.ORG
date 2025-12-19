import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-wrapper" style={{
      marginTop:"100px"
    }}>
      <div className="contact-card">
        <h2 className="contact-title">
          Send us a <span>message</span>
        </h2>

        <p className="contact-subtitle">
          Interested in Belle Oaks? Schedule a visit in just a few clicks
        </p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="email" placeholder="Your email" />
          </div>

          <textarea placeholder="Message"></textarea>

          <div className="form-footer">
            <p className="note">
              *You’ll hear back from us within one business day.
            </p>

            <button type="submit" className="send-btn">
              Send <span>→</span>
            </button>
          </div>
        </form>

        <div className="contact-info">
          <p>Get in touch</p>
          <span>(818) 887-9797</span>
          <span className="mail">•</span>
          <span >info@belleoaksmarketplace.com</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
