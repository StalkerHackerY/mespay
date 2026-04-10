let selectedService = "ORANGE";

// dropdown
function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display =
    dropdown.style.display === "flex" ? "none" : "flex";
}

function selectOption(value) {
  selectedService = value;

  document.getElementById("selected").innerText =
    value === "ORANGE" ? "Orange Money" : "MTN Money";

  document.getElementById("dropdown").style.display = "none";
}

function cancelPayment() {
  alert("Paiement annulé");
}

// 🔒 montant FIXE côté frontend (affichage seulement)
const FIXED_AMOUNT = 10000;

// modal
function openModal() {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-amount").innerText =
    FIXED_AMOUNT.toLocaleString() + " FCFA";
  document.getElementById("modal-text").innerText = "📲 Confirme sur ton téléphone...";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// paiement
async function pay() {
  const phone = document.getElementById("phone").value;

  if (!/^6\d{8}$/.test(phone)) {
    alert("Numéro invalide");
    return;
  }

  openModal();

  try {
    const res = await fetch("/pay", { // ✅ CORRIGÉ ICI
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone,
        service: selectedService
      }) // ❌ amount supprimé
    });

    const data = await res.json();

    if (data.success) {
      document.getElementById("modal-text").innerText =
        "📲 Confirme sur ton téléphone";
    } else {
      throw new Error(data.message);
    }

  } catch (error) {
    document.getElementById("modal-text").innerText =
      "❌ Paiement échoué";
  }
}