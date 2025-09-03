"use client";

import React from "react";
import styles from "../../styles/privacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={`container ${styles.policyContainer}`}>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="mb-4 text-center">Privacy Policy</h1>
          <p className="text-muted mb-5 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className={styles.section}>
            <h4>1. Introduction</h4>
            <p>
              Welcome to <strong>Scrapify</strong>. This Privacy Policy explains how
              we handle your information when you use our app and services. By
              using Scrapify, you agree to the practices described below.
            </p>
          </div>

          <div className={styles.section}>
            <h4>2. Information We Collect</h4>
            <p>
              Scrapify is designed to respect your privacy. We do not collect,
              store, or share any personal information unless explicitly provided
              by you for app functionality (such as pickup address or contact
              details).
            </p>
          </div>

          <div className={styles.section}>
            <h4>3. How We Use Information</h4>
            <p>
              Any data you provide is used solely to deliver the services you
              request, such as scheduling scrap pickups. We do not sell or share
              your information with third parties.
            </p>
          </div>

          <div className={styles.section}>
            <h4>4. Data Security</h4>
            <p>
              We take reasonable measures to protect your information from
              unauthorized access, alteration, or disclosure. However, no
              electronic storage method is 100% secure.
            </p>
          </div>

          <div className={styles.section}>
            <h4>5. Children’s Privacy</h4>
            <p>
              Scrapify is not intended for children under 13. We do not knowingly
              collect information from children.
            </p>
          </div>

          <div className={styles.section}>
            <h4>6. Changes to This Policy</h4>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated “Last Updated” date.
            </p>
          </div>

          <div className={styles.section}>
            <h4>7. Contact Us</h4>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at:
              <br />
              <a href="mailto:support@scrapify.com">support@scrapify.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
