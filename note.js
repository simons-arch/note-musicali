let gruppo_note =
["6 mi-", "6 mi+", "6 fa+", "6 fa-", "6 sol+", "6 sol-", "6 la+", "6 la-", "6 si+", "6 si-",
"6 do+", "6 do-", "6 re+", "6 re-", "5 la+", "5 la-", "5 si+", "5 si-", "5 do+", "5 do-",
"5 re+", "5 re-", "5 mi+", "5 mi-", "5 fa+", "5 fa-", "5 sol+", "5 sol-", "4 re+", "4 re-",
"4 mi+", "4 mi-", "4 fa+", "4 fa-", "4 sol+", "4 sol-", "4 la+", "4 la-", "4 si+", "4 si-",
"4 do+", "4 do-", "3 sol+", "2 do+", "2 re+", "2 mi+", "2 fa+", "2 sol+", "2 la+", "2 si+"];

function cambianota(){
  let indiceCasuale = Math.floor(Math.random() * gruppo_note.length);
  const notaCasuale = gruppo_note[indiceCasuale];
  document.getElementById("output").textContent = notaCasuale;
};
