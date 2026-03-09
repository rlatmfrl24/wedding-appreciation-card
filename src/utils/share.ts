export type ShareResult = "shared" | "copied" | "dismissed" | "failed";

type ShareOptions = {
  title: string;
  text: string;
  shareUrl?: string;
};

const getCurrentUrl = (shareUrl?: string): string => {
  if (shareUrl) {
    return shareUrl;
  }

  if (typeof window === "undefined") {
    return "";
  }

  return window.location.href;
};

const fallbackCopyToClipboard = (value: string): boolean => {
  if (typeof document === "undefined") {
    return false;
  }

  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = value;
  tempTextArea.setAttribute("readonly", "");
  tempTextArea.style.position = "absolute";
  tempTextArea.style.left = "-9999px";
  document.body.append(tempTextArea);
  tempTextArea.select();
  const copied = document.execCommand("copy");
  tempTextArea.remove();

  return copied;
};

const copyToClipboard = async (value: string): Promise<boolean> => {
  if (!value) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return fallbackCopyToClipboard(value);
  }
};

export const sharePage = async ({
  title,
  text,
  shareUrl,
}: ShareOptions): Promise<ShareResult> => {
  const url = getCurrentUrl(shareUrl);

  if (!url) {
    return "failed";
  }

  if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
    try {
      await navigator.share({
        title,
        text,
        url,
      });
      return "shared";
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return "dismissed";
      }
    }
  }

  const copied = await copyToClipboard(url);
  return copied ? "copied" : "failed";
};
