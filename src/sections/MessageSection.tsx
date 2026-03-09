import styles from "./MessageSection.module.css";

type MessageSectionProps = {
  heading: string;
  paragraphs: string[];
};

export function MessageSection({ heading, paragraphs }: MessageSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="message-title">
      <h2 id="message-title" className={styles.heading}>
        {heading}
      </h2>
      <div className={styles.body}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
