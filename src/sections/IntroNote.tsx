import styles from "./IntroNote.module.css";

type IntroNoteProps = {
  text: string;
};

export function IntroNote({ text }: IntroNoteProps) {
  return (
    <section className={styles.section} aria-label="감사 인트로">
      <p className={styles.text}>{text}</p>
    </section>
  );
}
