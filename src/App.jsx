import React from "react";

import assets from "./assets";
import { Download, Features, SectionWrapper } from "./components";
import styles from "./styles/Global";

const App = () => {
  return (
    <React.Fragment>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25
            million+ people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNeft NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users' devices. Expo handles the gritty parts of building for each app store so you don't need Xcode or Android Studio to get your app into people's hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app comprises two screens. The first screen lists all the NFTs while the latter shows the details of a particular NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 flex justify-center items-center flex-col bg-primary text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by{" "}
          <span className="font-bold">JavaScript Mastery</span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default App;
