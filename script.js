// script.js
// Page 1: Enregistrer les données dans le localStorage
document.getElementById('form-abonnement').addEventListener('submit', function(event) {
  event.preventDefault();

  // Récupérer les valeurs du formulaire
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const email = document.getElementById('email').value;
  const numero = document.getElementById('numero').value;
  const voie = document.getElementById('voie').value;
  const codePostal = document.getElementById('codePostal').value;
  const ville = document.getElementById('ville').value;
  const box = document.getElementById('box').value;

  // Sauvegarder les données dans le localStorage
  localStorage.setItem('nom', nom);
  localStorage.setItem('prenom', prenom);
  localStorage.setItem('email', email);
  localStorage.setItem('numero', numero);
  localStorage.setItem('voie', voie);
  localStorage.setItem('codePostal', codePostal);
  localStorage.setItem('ville', ville);
  localStorage.setItem('box', box);

  // Rediriger vers la page récapitulatif
  window.location.href = 'recap.html';
});
window.addEventListener('DOMContentLoaded', function() {
  const recapContainer = document.getElementById('recap');
  const acceptCGU = document.getElementById('acceptCGU');
  const validerButton = document.getElementById('valider');

  // Récupérer les données depuis localStorage
  const nom = localStorage.getItem('nom');
  const prenom = localStorage.getItem('prenom');
  const email = localStorage.getItem('email');
  const adresse = `${localStorage.getItem('numero')} ${localStorage.getItem('voie')}, ${localStorage.getItem('codePostal')} ${localStorage.getItem('ville')}`;
  const box = localStorage.getItem('box');
  const price = box === '15m²' ? '90€' : '120€'; // Exemple de prix basé sur la taille du box

  // Afficher le récapitulatif de la commande
  recapContainer.innerHTML = `
    <p><strong>Nom :</strong> ${nom}</p>
    <p><strong>Prénom :</strong> ${prenom}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Adresse :</strong> ${adresse}</p>
    <p><strong>Box choisi :</strong> ${box} - <strong>Prix :</strong> ${price} par mois</p>
  `;

  // Fonction pour activer/désactiver le bouton de validation en fonction de la case
  acceptCGU.addEventListener('change', function() {
    validerButton.disabled = !acceptCGU.checked; // Le bouton est activé seulement si la case est cochée
  });

  // Lorsque le bouton est cliqué, rediriger vers la page de paiement
  validerButton.addEventListener('click', function() {
    window.location.href = 'payment.html';  // Redirige vers la page de paiement
  });
});
