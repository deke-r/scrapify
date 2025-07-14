"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "../styles/Contact.module.css";
import axios from "axios";

export default function ContactFormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg("");
    setSubmitted(false);

    try {
      const response = await axios.post("/api/contact", data);
      if (response.data.success) {
        setSubmitted(true);
        reset();
      } else {
        setErrorMsg("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMsg("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className={`${styles.contactCard} card shadow-lg border-0`}>
              <div className="card-body p-5">
                <h2 className="fw-bold mb-4 text-center">Send us a Message</h2>

                {submitted && (
                  <div className="alert alert-success text-center" role="alert">
                    Message sent successfully!
                  </div>
                )}

                {errorMsg && (
                  <div className="alert alert-danger text-center" role="alert">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName" className="form-label fw-bold f_14">
                        First Name
                      </label>
                      <input
                        type="text"
                        className={`form-control shadow-none ${errors.firstName ? "is-invalid" : ""}`}
                        id="firstName"
                        {...register("firstName", { required: "First name is required" })}
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">{errors.firstName.message}</div>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName" className="form-label fw-bold f_14">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className={`form-control shadow-none ${errors.lastName ? "is-invalid" : ""}`}
                        id="lastName"
                        {...register("lastName", { required: "Last name is required" })}
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">{errors.lastName.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold f_14">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={`form-control shadow-none ${errors.email ? "is-invalid" : ""}`}
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-bold f_14">
                      Subject
                    </label>
                    <select
                      className={`form-select shadow-none ${errors.subject ? "is-invalid" : ""}`}
                      id="subject"
                      {...register("subject", { required: "Please select a subject" })}
                    >
                      <option value="">Choose a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Partnership</option>
                    </select>
                    {errors.subject && (
                      <div className="invalid-feedback">{errors.subject.message}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-bold f_14">
                      Message
                    </label>
                    <textarea
                      className={`form-control shadow-none ${errors.message ? "is-invalid" : ""}`}
                      id="message"
                      rows="5"
                      placeholder="Tell us how we can help you..."
                      {...register("message", { required: "Message is required" })}
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message.message}</div>
                    )}
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-success rounded-4 py-3 f_14 fw-semibold px-4 w-50"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
