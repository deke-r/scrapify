"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/scrapify-app.module.css";



const SectionHeader = ({ eyebrow, title, subtitle }) => (
    <div className="text-center mb-5">
        {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
        <h2 className={styles.sectionTitle}>{title}</h2>
        {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
    </div>
);

const FeatureItem = ({ icon, title, desc }) => (
    <div className={`col-lg-4 col-md-6 mb-4`}>
        <div className={styles.featureCard}>
            <div className={styles.featureIcon}>{icon}</div>
            <h5 className={styles.featureTitle}>{title}</h5>
            <p className={styles.featureDesc}>{desc}</p>
        </div>
    </div>
);

const Step = ({ number, title, text }) => (
    <div className="col-lg-4 col-md-6 mb-4">
        <div className={styles.stepCard}>
            <div className={styles.stepNumber}>0{number}</div>
            <h5 className={styles.stepTitle}>{title}</h5>
            <p className={styles.stepText}>{text}</p>
        </div>
    </div>
);

const TestimonialCard = ({ name, company, text, img }) => (
    <div className="col-lg-4 col-md-6 mb-4">
        <div className={styles.testimonialCard}>
            <div className={styles.testimonialBody}>
                <p>"{text}"</p>
            </div>
            <div className={styles.testimonialMeta}>
                <Image src={img} width={56} height={56} alt={name} className={styles.testimonialImg} />
                <div>
                    <div className={styles.testimonialName}>{name}</div>
                    <div className={styles.testimonialCompany}>{company}</div>
                </div>
            </div>
        </div>
    </div>
);

/* ============================
   Main page component
   ============================ */

export default function ScrapifyAppPage() {
    return (
        <>
            <Head>
                <title>Scrapify App — Smart Scrap Pickup | Scrapify</title>
                <meta name="description" content="Schedule scrap pickups, check live rates, get instant payouts and manage all scrap operations with the Scrapify app." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className={styles.pageWrapper} aria-label="Scrapify App Page">
                {/* HERO */}
                <section className={`${styles.hero} container py-5`}>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className={styles.kicker}>Official Mobile App</div>
                            <h1 className={styles.heroTitle}>Scrapify — Book scrap pickup, track shipments, get paid faster</h1>
                            <p className={styles.lead}>
                                Manage scrap pickups, view live prices, and receive digital invoices — all from one place.
                                Scrapify brings businesses and households closer to responsible recycling and instant payouts.
                            </p>

                            <div className="d-flex align-items-center gap-3 mt-4">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.senseprojects.scrapifyApp&pcampaignid=web_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Download Scrapify on Google Play"
                                >
                                    <Image src="/img/—Pngtree—google play app icon vector_12256664.png" alt="Get it on Google Play" width={180} height={50} />
                                </a>

                                <a className={styles.ghostBtn} href="#how-it-works">How it works</a>
                            </div>

                            <div className="mt-4">
                                <ul className={styles.heroStats}>
                                    <li><strong>New</strong> on Play Store</li>
                                    <li><strong>100%</strong> eco-friendly process</li>
                                    <li><strong>Fast</strong> pickup experience</li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-6 text-center mt-4 mt-lg-0">
                            <div className={styles.mockupWrap}>
                                <Image src="/app-mockup.png" width={360} height={720} alt="Scrapify App Mockup" className={styles.appMockup} />
                                {/* Small floating badges */}
                                <div className={styles.badgeTop}>Fast Pickup</div>
                                <div className={styles.badgeBottom}>Instant Payouts</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className={styles.featuresSection + " py-5"}>
                    <div className="container">
                        <SectionHeader eyebrow="Features" title="Why people love Scrapify" subtitle="Everything you need to manage scrap sustainably and profitably." />

                        <div className="row">
                            <FeatureItem
                                icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="#1d4e2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                                title="Schedule Pickup in Seconds"
                                desc="Create a pickup request with material details, preferred slot and location. No calls, no hassle."
                            />
                            <FeatureItem
                                icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#1d4e2b" strokeWidth="2" /></svg>}
                                title="Live Rates & Price Alerts"
                                desc="See live market rates for metals and plastics, and set alerts for price thresholds."
                            />
                            <FeatureItem
                                icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="#1d4e2b" strokeWidth="2" /></svg>}
                                title="Digital Invoices"
                                desc="Automated digital invoices sent to your inbox and stored in the app for easy accounting."
                            />
                            <FeatureItem
                                icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#1d4e2b" strokeWidth="2" /></svg>}
                                title="Multiple Pickup Addresses"
                                desc="Manage homes, shops, warehouses and societies — add multiple addresses and save them for one-tap booking."
                            />
                            <FeatureItem
                                icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M4 6h16" stroke="#1d4e2b" strokeWidth="2" /></svg>}
                                title="Real-time Tracking"
                                desc="Get minute-by-minute updates from pickup confirmation to payment settlement."
                            />
                            <FeatureItem
                                icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2l3 7H9l3-7z" stroke="#1d4e2b" strokeWidth="2" /></svg>}
                                title="In-app Support"
                                desc="Chat with our support team or get answers from the integrated help center."
                            />
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section id="how-it-works" className={styles.howItWorks + " py-5"}>
                    <div className="container">
                        <SectionHeader eyebrow="Get started" title="How Scrapify Works" subtitle="Three simple steps to recycle and earn." />

                        <div className="row">
                            <Step number={1} title="Create an Account" text="Sign up using your mobile number. OTP verification keeps your account secure." />
                            <Step number={2} title="Book a Pickup" text="Choose material, weight estimate, and preferred slot. Confirm with one tap." />
                            <Step number={3} title="Get Paid" text="Collect payment instantly or receive digital transfers once the item is weighed." />
                        </div>

                        <div className="row mt-5">
                            <div className="col-lg-6">
                                <div className={styles.detailedSteps}>
                                    <h4>Smart scheduling & route optimization</h4>
                                    <p>
                                        Our backend optimizes pickup routes, reducing wait times and emissions. Customers get slots that blend
                                        convenience and environmental efficiency.
                                    </p>
                                    <ul>
                                        <li>Dynamic driver allocation</li>
                                        <li>Pickup consolidation</li>
                                        <li>Real-time ETA updates</li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

                {/* SCREENSHOTS (Bootstrap carousel) */}
                <section className={styles.screenshots + " py-5"}>
                    <div className="container">
                        <SectionHeader
                            eyebrow="Visuals"
                            title="Inside the App"
                            subtitle="Screenshots from the latest release."
                        />

                        <div className="row justify-content-center mt-4">
                            <div className="col-lg-4 col-md-4 col-10 mb-4 text-center">
                                <Image
                                    src="/img/appscreen1.webp"
                                    alt="Scrapify App Screen 1"
                                    width={320}
                                    height={568}
                                    className={styles.screenImg}
                                />
                            </div>

                            <div className="col-lg-4 col-md-4 col-10 mb-4 text-center">
                                <Image
                                    src="/img/appscreen2.webp"
                                    alt="Scrapify App Screen 2"
                                    width={320}
                                    height={568}
                                    className={styles.screenImg}
                                />
                            </div>

                            <div className="col-lg-4 col-md-4 col-10 mb-4 text-center">
                                <Image
                                    src="/img/appscreen3.webp"
                                    alt="Scrapify App Screen 3"
                                    width={320}
                                    height={568}
                                    className={styles.screenImg}
                                />
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <a
                                className={styles.secondaryBtn}
                                href="https://play.google.com/store/apps/details?id=com.senseprojects.scrapifyApp&pcampaignid=web_share"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Open in Play Store
                            </a>
                        </div>
                    </div>
                </section>



                {/* FAQ */}
                <section className={styles.faq + " py-5"}>
                    <div className="container">
                        <SectionHeader eyebrow="Support" title="Frequently asked questions" subtitle="Quick answers to common questions." />

                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="faqHeadingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne" aria-expanded="false" aria-controls="faqOne">
                                        How do I book a pickup?
                                    </button>
                                </h2>
                                <div id="faqOne" className="accordion-collapse collapse" aria-labelledby="faqHeadingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Open the app → choose pickup → add material details and pickup address → confirm slot. Our driver will arrive in your selected slot.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="faqHeadingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo" aria-expanded="false" aria-controls="faqTwo">
                                        Which materials do you accept?
                                    </button>
                                </h2>
                                <div id="faqTwo" className="accordion-collapse collapse" aria-labelledby="faqHeadingTwo" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        We accept ferrous metals, copper, aluminium, brass, PVC, PET, HDPE and more. Use the 'Materials' list in the app to check detailed categories.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="faqHeadingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree" aria-expanded="false" aria-controls="faqThree">
                                        How do payments work?
                                    </button>
                                </h2>
                                <div id="faqThree" className="accordion-collapse collapse" aria-labelledby="faqHeadingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Payments are processed after material is weighed at the collection center. You can receive instant cash, bank transfer or app wallet credits as per your preference.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





                {/* CHANGELOG / RELEASE NOTES */}
                {/* <section className={styles.changelog + " py-5"}>
          <div className="container">
            <SectionHeader eyebrow="Updates" title="Release notes & changelog" subtitle="What's new in the app." />

            <div className={styles.changelogGrid}>
              <div className={styles.changeItem}>
                <h6>v2.6.1 — Nov 2025</h6>
                <p>Performance improvements, lower memory usage, and bug fixes for scheduling edge-cases.</p>
              </div>
              <div className={styles.changeItem}>
                <h6>v2.5.0 — Sep 2025</h6>
                <p>Added live chat support, multi-address management and improved driver ETA accuracy.</p>
              </div>
              <div className={styles.changeItem}>
                <h6>v2.4.0 — Jul 2025</h6>
                <p>New pricing alerts and in-app wallet integration for instant payouts.</p>
              </div>
            </div>
          </div>
        </section> */}






            </main>
        </>
    );
}
