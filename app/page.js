export const metadata = {
  title: "Scrapify – Bulk Scrap & E-Waste Pickup in Delhi, Noida, Gurugram",
  description:
    "Scrapify offers certified bulk scrap pickup, e-waste collection & facility decommissioning in Delhi NCR. For societies, companies & industries. Instant payment, GST invoices,Book your doorstep scrap pickup with Scrapify and get paid instantly. Trusted across NCR for eco-friendly and transparent scrap disposal services.",
  keywords:
    "bulk scrap pickup Delhi, online kabadiwala Noida, scrap dealer Gurugram, e-waste collection Ghaziabad, scrap buyers Faridabad, industrial scrap Delhi NCR, kabadiwala for companies, commercial scrap buyers,scrap pickup NCR, scrapify booking, instant scrap payment, online scrap collection, recycling service India,online kabadiwala",
}
import Banner from "@/components/Banner";
import FloatingForm from "@/components/FloatingForm";
import MultiStepForm from "@/components/multi-step-form"
import WhyRecycleBaba from "@/components/why-scrapify"
import HowItWorks from "@/components/how-it-works"
import PricingCards from "@/components/pricing-cards"
import CallToAction from "@/components/call-to-action"
import Testimonials from "@/components/Testimonials";
export default function Page() {
  return (
    <>
      <Banner />
      <FloatingForm />
      <WhyRecycleBaba />
      <HowItWorks />
      <Testimonials/>
    </>
  );
}