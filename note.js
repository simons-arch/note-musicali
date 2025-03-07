let gruppo_note =
["Dom", "Do", "Rem", "Re", "Mim", "Mi", "Fam", "Fa", "Solm", "Sol", "Lam", "La", "Sim", "Si", 
"Do♯m", "Do♯", "Re♯m", "Re♯", "Fa♯m", "Fa♯", "Sol♯m", "Sol♯", "La♯m", "La♯", 
"Re♭m", "Re♭", "Mi♭m", "Mi♭", "Sol♭m", "Sol♭", "La♭m", "La♭", "Si♭m", "Si♭"];

function cambianota(){
  let indiceCasuale = Math.floor(Math.random() * gruppo_note.length);
  const notaCasuale = gruppo_note[indiceCasuale];
  document.getElementById("output").textContent = notaCasuale;
};
