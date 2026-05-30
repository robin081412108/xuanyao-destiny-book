"use client";

import Link from "next/link";
import { useState } from "react";
import { toPng } from "html-to-image";

const actionClassName =
  "inline-flex min-h-12 items-center justify-center border border-[#c89b3c]/45 bg-[#0a0805]/86 px-6 py-3 text-sm font-semibold text-[#f0d492] transition hover:border-[#f0d492]/80 hover:bg-[#151007] focus:outline-none focus:ring-2 focus:ring-[#f0d492] focus:ring-offset-2 focus:ring-offset-black";

export function ResultActions() {
  const [copyLabel, setCopyLabel] = useState("Copy Link");
  const [imageError, setImageError] = useState("");

  async function handleSaveImage() {
    setImageError("");
    const captureTarget = document.getElementById("destiny-book-capture");

    if (!captureTarget) {
      setImageError("Image export is temporarily unavailable. Please try again.");
      return;
    }

    try {
      const dataUrl = await toPng(captureTarget, {
        backgroundColor: "#030302",
        cacheBust: true,
        pixelRatio: 2
      });
      const link = document.createElement("a");
      link.download = "xuanyao-destiny-book.png";
      link.href = dataUrl;
      link.click();
    } catch {
      setImageError("Image export is temporarily unavailable. Please try again.");
    }
  }

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyLabel("Link Copied");
      window.setTimeout(() => setCopyLabel("Copy Link"), 1600);
    } catch {
      setCopyLabel("Copy Link");
    }
  }

  return (
    <section className="mt-8 border border-[#c89b3c]/20 bg-[#050403]/82 p-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <button className={actionClassName} onClick={handleSaveImage} type="button">
          Save as Image
        </button>
        <button className={actionClassName} onClick={handleCopyLink} type="button">
          {copyLabel}
        </button>
        <Link className={actionClassName} href="/preview">
          Back to Preview
        </Link>
      </div>
      {imageError ? (
        <p className="mt-4 text-sm leading-6 text-[#d9c798]">{imageError}</p>
      ) : null}
    </section>
  );
}
