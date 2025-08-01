"use client"

import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import { FileText, Users, Server, Headphones } from "lucide-react"
import { useState, useEffect } from "react"
import styles from "../styles/About.module.css"

const stats = [
  {
    icon: FileText,
    value: 500,
    suffix: "+",
    label: "Records Extracted"
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Active Users"
  },
  {
    icon: Server,
    value: 99.5,
    suffix: "%",
    label: "System Uptime"
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "Support Available"
  }
]


export default function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  })

  // Changing key on each view to re-trigger CountUp
  const [countKey, setCountKey] = useState(0)

  useEffect(() => {
    if (inView) {
      setCountKey(prev => prev + 1)
    }
  }, [inView])

  return (
    <section className="py-5 bg-white" ref={ref}>
      <div className="container">
        <div className="row text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className={`${styles.statItem} p-3`}>
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3 rounded-circle bg-light shadow icon-hover"
                    style={{ width: 80, height: 80 }}
                  >
                    <Icon size={36} className="text-success" />
                  </div>
                  <h2 className="display-5 fw-bold text-success mb-2">
                    <CountUp
                      key={countKey + index}
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                      decimals={stat.label === "Uptime" ? 1 : 0}
                    />
                  </h2>
                  <p className="f_16 text-muted fw-medium">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .icon-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .icon-hover:hover {
          transform: scale(1.1);
          box-shadow: 0 0 0.75rem rgba(0, 128, 0, 0.3);
        }
      `}</style>
    </section>
  )
}
