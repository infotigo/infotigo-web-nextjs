'use client';

import React, { useEffect, useState } from 'react';
import SocialIcon from '../common/SocialIcon';
import { createContact } from '@/lib/strapi';

function Contact({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mathChallenge, setMathChallenge] = useState({ num1: 0, num2: 0 });
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    generateMathChallenge();
  }, []);

  const generateMathChallenge = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setMathChallenge({ num1, num2 });
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(userAnswer) !== mathChallenge.num1 + mathChallenge.num2) {
      setSubmitStatus('math-error');
      generateMathChallenge();
      setUserAnswer("");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { data } = await createContact(formData);

      if (!data.createdAt) {
        throw new Error('Failed to submit');
      }

      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      generateMathChallenge();
      setUserAnswer("");
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="#0">{data?.phone}</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>{data?.address}</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>{data?.email}</p>
              </div>

              <div className="social-icon mt-50">
                {data?.socialLinks?.map((item) => (
                  <a href={item?.url} key={item?.id} style={{ marginRight: "5px" }}>
                    <SocialIcon name={item?.platform} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let&lsquo;s Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form
                id="contact-form"
                className="form2"
                onSubmit={handleSubmit}
              >
                <div className="messages">
                  {submitStatus === 'success' && (
                    <div className="alert alert-success">Message sent successfully!</div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="alert alert-danger">Failed to send message. Please try again.</div>
                  )}
                  {submitStatus === 'math-error' && (
                    <div className="alert alert-danger">Incorrect answer. Please try again.</div>
                  )}
                </div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-30 mt-2">
                        <label className="mb-2">What is {mathChallenge.num1} + {mathChallenge.num2}?</label>
                        <input
                          type="number"
                          placeholder="Enter your answer"
                          required="required"
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                        disabled={isSubmitting}
                      >
                        <span className="text">
                          {isSubmitting ? 'Sending...' : 'Let\'s Talk'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Contact;
