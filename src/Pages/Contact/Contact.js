import React from "react";
import { Container, FormControl } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="full-contact-area">
      <Container>
        <h1 className="title">Get Intouch</h1>
        <p className="body">
          Have a question or just want to say hi? We'd love to hear from you.
        </p>

        <section>
          <div>
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2 gy-3">
                    <form method="post" data-form-title="CONTACT US">
                      <FormControl
                        type="hidden"
                        data-form-email="true"
                        aria-describedby="basic-addon2"
                      />
                      <div className="my-3 form-group">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="name"
                          required=""
                          placeholder="Name*"
                          data-form-field="Name"
                          aria-describedby="basic-addon2"
                        />
                      </div>
                      <div className="my-3 form-group">
                        <FormControl
                          type="email"
                          className="form-control"
                          name="email"
                          required=""
                          placeholder="Email*"
                          data-form-field="Email"
                          aria-describedby="basic-addon2"
                        />
                      </div>
                      <div className="my-3 form-group">
                        <FormControl
                          type="tel"
                          className="form-control"
                          name="phone"
                          placeholder="Phone"
                          data-form-field="Phone"
                          aria-describedby="basic-addon2"
                        />
                      </div>
                      <div className="my-3 form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Message"
                          rows="7"
                          data-form-field="Message"
                        ></textarea>
                      </div>
                      <div>
                        <button type="submit" className="btn btn-lg btn-info">
                          SEND MESSAGE <i class="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Contact;
