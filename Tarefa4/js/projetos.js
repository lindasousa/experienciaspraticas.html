document.addEventListener("DOMContentLoaded", () => {
  const copiarBtn = document.getElementById("copiar-pix-btn"),
        modal = document.getElementById("confirmacao-modal");

  if (!copiarBtn || !modal) return;

  const modalText = modal.querySelector("p");

  copiarBtn.addEventListener("click", async () => {
    const chave = document.getElementById("chave-pix").textContent;

    try {
      await navigator.clipboard.writeText(chave);
      modalText.textContent = "✓ Chave PIX copiada!";
    } catch {
      modalText.textContent = "❌ Falha ao copiar. Tente manualmente.";
    }

    modal.showModal();
    setTimeout(() => modal.close(), 2000);
  });
});
