"use client";
import {
  IndianRupee,
  ShieldCheck,
  Scale,
  Eye
} from "lucide-react";

const features = [
  {
    icon: <IndianRupee className="text-success" size={50} />,
    title: "Best Rates",
    desc: "Recyclebaba gives you the best prices for your scrap."
  },
  {
    icon: <ShieldCheck className="text-success" size={50} />,
    title: "Verified Scrap Pickup Team",
    desc: "Our verified scrap team comes to your doorstep for pickup."
  },
  {
    icon: <Scale className="text-success" size={50} />,
    title: "Digital Weighing Scale",
    desc: "We use ISO-certified digital weighing scales."
  },
  {
    icon: <Eye className="text-success" size={50} />,
    title: "Transparent Process",
    desc: "You see everything we weigh and pay for."
  }
];

export default function WhyRecycleBaba() {
  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row mx-md-5">
        <div className="text-center">
          <h1 className="fw-bold text-success">Why Scrapfiy</h1>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-3 col-lg-3">
              <div className="card h-100 border-0 shadow-sm rounded-4  hover-card py-5 px-4">
                <div className="">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      backgroundColor: "#E8F3E8",
                      width: "70px",
                      height: "70px"
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="fw-bold my-4 text-dark mb-2">{feature.title}</h4>
                    <p className="text-muted fw-medium mb-0">{feature.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
