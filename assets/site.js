(() => {
  const copy = document.querySelector("[data-copy-email]");
  const feedback = document.querySelector("[data-copy-feedback]");

  if (copy && feedback && navigator.clipboard && window.isSecureContext) {
    copy.hidden = false;
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(copy.dataset.copyEmail);
        feedback.textContent = "邮箱已复制";
      } catch {
        feedback.textContent = "复制未完成，可选择上方邮件地址。";
      }
    });
  }

  const print = document.querySelector("[data-print]");
  if (print) {
    print.hidden = false;
    print.addEventListener("click", () => window.print());
  }
})();
