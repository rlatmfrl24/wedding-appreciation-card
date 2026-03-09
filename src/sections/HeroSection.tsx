import { useState } from "react";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  names: string;
  title: string;
  heroImage: string;
  heroImageSrcSet?: string;
  heroImageSizes?: string;
  heroAlt: string;
  dateText?: string;
  heroScriptText?: string;
};

export function HeroSection({
  names,
  title,
  heroImage,
  heroImageSrcSet,
  heroImageSizes,
  heroAlt,
  dateText,
  heroScriptText,
}: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <header className={styles.hero}>
      <div className={styles.shell}>
        <div className={styles.imageWrap}>
          <div
            className={`${styles.skeleton} ${isLoaded ? styles.skeletonHidden : ""}`}
            aria-hidden="true"
          />
          <img
            src={heroImage}
            srcSet={heroImageSrcSet}
            sizes={heroImageSizes}
            alt={heroAlt}
            className={`${styles.image} ${isLoaded ? styles.imageLoaded : ""}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
          />
          <div className={styles.overlay} aria-hidden="true" />
          {heroScriptText ? (
            <div className={styles.scriptWrap}>
              <p className={styles.scriptText}>{heroScriptText}</p>
            </div>
          ) : null}
        </div>

        <div className={styles.content}>
          {dateText ? <p className={styles.date}>{dateText}</p> : null}
          <h1 className={styles.names}>{names}</h1>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </header>
  );
}
