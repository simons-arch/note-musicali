let gruppo_note =
["Dom", "Do", "Rem", "Re", "Mim", "Mi", "Fam", "Fa", "Solm", "Sol", "Lam", "La", "Sim", "Si",
"Do♯m", "Do♯", "Re♯m", "Re♯", "Fa♯m", "Fa♯", "Sol♯m", "Sol♯", "La♯m", "La♯",
"Re♭m", "Re♭", "Mi♭m", "Mi♭", "Sol♭m", "Sol♭", "La♭m", "La♭", "Si♭m", "Si♭"];

let raccoglitore = [];

function raccoglinota() {
  if (raccoglitore.length >= gruppo_note.length) {
    alert("Tutte le note sono state raccolte! Ricominciamo");
    raccoglitore = [];
  }

  let indiceCasuale = Math.floor(Math.random() * gruppo_note.length);

  while (raccoglitore.includes(gruppo_note[indiceCasuale])) {
    indiceCasuale = Math.floor(Math.random() * gruppo_note.length);
  }

  const notaCasuale = gruppo_note[indiceCasuale];

  let elementoBlu = document.getElementById("blu");
  if (elementoBlu) {
    elementoBlu.textContent = notaCasuale;
  } else {
    console.error('Elemento con ID "blu" non trovato!');
  }

  raccoglitore.push(notaCasuale);
}
