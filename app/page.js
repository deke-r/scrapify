export const metadata = {
  title: "Home | Scrapify - Turn Scrap into Value",
  description:
    "Book your doorstep scrap pickup with Scrapify and get paid instantly. Trusted across NCR for eco-friendly and transparent scrap disposal services.",
  keywords:
    "scrap pickup NCR, scrapify booking, instant scrap payment, online scrap collection, recycling service India",
}
import Banner from "@/components/Banner";
import FloatingForm from "@/components/FloatingForm";
import MultiStepForm from "@/components/multi-step-form"
import WhyRecycleBaba from "@/components/why-scrapify"
import HowItWorks from "@/components/how-it-works"
import PricingCards from "@/components/pricing-cards"
import CallToAction from "@/components/call-to-action"
export default function Page() {
  return (
    <>
      <Banner />
      <FloatingForm />
      <WhyRecycleBaba />
      <HowItWorks />
    </>
  );
}