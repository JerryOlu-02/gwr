import DailyActivities from "../components/DailyActivities";
import Faqs from "../components/Faqs";
import Guests from "../components/Guests";
import GwrAttempt from "../components/GwrAttempt";
import HearFrom from "../components/HearFrom";
import Hero from "../components/Hero";
import MeetChallenger from "../components/MeetChallenger";
import Partners from "../components/Partners";
import PoolComp from "../components/PoolComp";
import ShopBrands from "../components/ShopBrands";
import Sponsor from "../components/Sponsor";
import History from "../components/History";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <>
      <Hero />

      <Partners />

      <GwrAttempt />

      <PoolComp />

      <MeetChallenger />

      <HearFrom />

      <DailyActivities />

      <Guests />

      <Sponsor />

      <ShopBrands />

      <Faqs />

      <History />

      <Footer />
    </>
  );
}
