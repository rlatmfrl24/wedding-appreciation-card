import styles from "./App.module.css";
import { FloatingShareButton } from "./components/FloatingShareButton";
import { RevealOnScroll } from "./components/RevealOnScroll";
import { siteContent } from "./content/siteContent";
import { ClosingNote } from "./sections/ClosingNote";
import { HeroSection } from "./sections/HeroSection";
import { MessageSection } from "./sections/MessageSection";

function App() {
  return (
    <div className={styles.page}>
      <HeroSection
        names={siteContent.names}
        title={siteContent.title}
        dateText={siteContent.dateText}
        heroScriptText={siteContent.heroScriptText}
        heroImage={siteContent.heroImage.src}
        heroImageSrcSet={siteContent.heroImage.srcSet}
        heroImageSizes={siteContent.heroImage.sizes}
        heroAlt={siteContent.heroImage.alt}
      />

      <main className={styles.main}>
        <RevealOnScroll delayMs={120}>
          <MessageSection
            heading={siteContent.messageHeading}
            paragraphs={siteContent.messageParagraphs}
          />
        </RevealOnScroll>

        <ClosingNote
          closingText={siteContent.closingText}
          signature={siteContent.signature}
        />

        <FloatingShareButton
          shareTitle={siteContent.shareTitle}
          shareText={siteContent.shareText}
        />
      </main>
    </div>
  );
}

export default App;
