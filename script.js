// Welcome overlay typing effect
const overlay = document.getElementById('overlay');
const mainName = document.getElementById('mainName');
const nameText = "ANORA ANISH";
let i = 0;

function typeName() {
  if (i <= nameText.length) {
    mainName.textContent = nameText.substring(0, i);
    i++;
    setTimeout(typeName, 40);
  } else {
    setTimeout(() => overlay.style.display = 'none', 500);
  }
}

window.addEventListener('load', typeName);

