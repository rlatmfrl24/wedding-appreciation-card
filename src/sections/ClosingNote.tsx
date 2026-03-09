import styles from "./ClosingNote.module.css";

type ClosingNoteProps = {
  closingText: string;
  signature: string;
};

export function ClosingNote({ closingText, signature }: ClosingNoteProps) {
  return (
    <section className={styles.section} aria-label="감사 인사 마무리">
      <p className={styles.text}>{closingText}</p>
      <p className={styles.signature}>
        {signature.split("\n").map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </section>
  );
}
