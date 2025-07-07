"use client"
import { useState } from 'react';
import styles from '../styles/FloatingForm.module.css';
import MultiStepForm from './multi-step-form';

export default function FloatingForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with actual form logic (e.g., Axios POST)
        console.log('Form submitted:', formData);
    };

    return (
        <div className="container">
            <div className="row mx-md-5">
                <div className={`container shadow rounded-5 p-5 ${styles.floatingBox}`}>
                    <div className="row px-4 align-items-center">
                        <div className="col-md-7 px-md-3 mb-3 mb-md-0">
                            <h2 className="fw-bold f_30">Sell your scrap to your Online Kabadiwala <span className="text-success">Scrapify</span>.</h2>
                            <p className="mb-2 fw-semibold text-muted">Hassle-Free doorstep pickup.</p>
                            <p className="mb-0 fw-semibold text-muted">We take all kinds of scrap: Paper, Plastic, Metal, E-Waste, Old Furniture, etc.</p>
                        </div>

                        <div className="col-md-5 px-md-3">
                            {/* <form onSubmit={handleSubmit} className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        placeholder="Enter your name"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        required
                                        placeholder="WhatsApp or mobile no."
                                        className="form-control"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        pattern="[0-9()+#*-.\s]+"
                                        title="Only numbers and phone characters (#, -, *, etc.) are accepted."
                                    />
                                </div>
                                <div className="col-12 text-end">
                                    <button type="submit" className="btn fw-semibold f_14 btn-success px-4">Submit</button>
                                </div>
                            </form> */}

                            <MultiStepForm/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
