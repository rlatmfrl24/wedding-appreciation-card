import { useEffect, useState } from "react";
import { sharePage, type ShareResult } from "../utils/share";
import styles from "./FloatingShareButton.module.css";

type FloatingShareButtonProps = {
  shareTitle: string;
  shareText: string;
  shareUrl?: string;
};

const STATUS_MESSAGES: Record<ShareResult, string> = {
  shared: "공유 창을 열었습니다.",
  copied: "감사장 링크를 복사했습니다.",
  dismissed: "공유를 취소했습니다.",
  failed: "링크 공유에 실패했습니다. 다시 시도해 주세요.",
};

export function FloatingShareButton({
  shareTitle,
  shareText,
  shareUrl,
}: FloatingShareButtonProps) {
  const [statusMessage, setStatusMessage] = useState("");
  const [isSharing, setIsSharing] = useState(false);

  useEffect(() => {
    if (!statusMessage) {
      return;
    }

    const timer = window.setTimeout(() => setStatusMessage(""), 2600);
    return () => window.clearTimeout(timer);
  }, [statusMessage]);

  const handleShare = async () => {
    setIsSharing(true);

    const result = await sharePage({
      title: shareTitle,
      text: shareText,
      shareUrl,
    });

    setStatusMessage(STATUS_MESSAGES[result]);
    setIsSharing(false);
  };

  return (
    <div className={styles.container}>
      {statusMessage ? (
        <p className={styles.status} role="status" aria-live="polite">
          {statusMessage}
        </p>
      ) : null}

      <button
        type="button"
        className={styles.button}
        onClick={handleShare}
        disabled={isSharing}
        aria-label="감사장 공유하기"
      >
        {isSharing ? "공유 준비 중..." : "감사장 공유하기"}
      </button>
    </div>
  );
}
