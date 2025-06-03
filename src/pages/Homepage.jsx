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
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Homepage() {
  const [eventRef, setEventRef] = useState();
  const [challengerRef, setChallengerRef] = useState();
  const [activitiesRef, setActivitiesRef] = useState();
  const [guestsRef, setGuestsRef] = useState();
  const [shopMerchRef, setShopBrandsMerch] = useState();

  return (
    <>
      <Hero>
        <Navbar
          eventRef={eventRef}
          challengerRef={challengerRef}
          activitiesRef={activitiesRef}
          guestsRef={guestsRef}
          shopMerchRef={shopMerchRef}
        />
      </Hero>

      <Partners />

      <GwrAttempt setRef={setEventRef} />

      <PoolComp />

      <MeetChallenger setRef={setChallengerRef} />

      <HearFrom />

      <DailyActivities setRef={setActivitiesRef} />

      <Guests setRef={setGuestsRef} />

      <Sponsor />

      <ShopBrands setRef={setShopBrandsMerch} />

      <Faqs />

      <History />

      <Footer />
    </>
  );
}
