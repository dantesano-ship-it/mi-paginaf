const startBtn = document.getElementById("startBtn");
const userNameInput = document.getElementById("userName");
const mainContent = document.getElementById("mainContent");
const userGreeting = document.getElementById("userGreeting");
const motivationalCardsContainer = document.getElementById("motivationalCards");
const finalMessage = document.getElementById("finalMessage");
const toggleAudioBtn = document.getElementById("toggleAudio");
const relaxVideo = document.getElementById("relaxVideo");

// Frases motivacionales
const motivationalPhrases = [
  "Cada noche es una nueva oportunidad para descansar mejor.",
  "Tu bienestar empieza con buenos hábitos de sueño.",
  "Pequeños cambios generan grandes resultados.",
  "Hoy es el primer día de tu sueño reparador."
];

const motCardClasses = ["mot-card1","mot-card2","mot-card3","mot-card4"];

// Animaciones al hacer scroll
const sections = document.querySelectorAll(".section-animated");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
},{threshold:0.2});

sections.forEach(sec => observer.observe(sec));

// Botón empezar
startBtn.addEventListener("click", () => {
  const name = userNameInput.value.trim();
  if(!name) return alert("Por favor ingresa tu nombre");
  
  // Saludo personalizado
  userGreeting.textContent = `¡Hola ${name}, aquí tienes tu revista de bienestar y sueño!`;

  // Ocultar input y botón
  document.getElementById("nameInputContainer").style.display = "none";

  // Mostrar contenido principal
  mainContent.classList.remove("hidden");

  // Mostrar botón de silenciar
  toggleAudioBtn.style.display = "block";

  // Mantener el video en silencio desde el inicio
  relaxVideo.muted = true;

  // Mostrar tarjetas de frases motivadoras
  motivationalCardsContainer.innerHTML = "";
  motivationalPhrases.forEach((text, i)=>{
    const div = document.createElement("div");
    div.className = `mot-card ${motCardClasses[i % motCardClasses.length]}`;
    div.textContent = text;
    motivationalCardsContainer.appendChild(div);
  });

  // Mostrar mensaje final
  finalMessage.textContent = `Recuerda ${name}, cuidar tu sueño es cuidar tu bienestar. ¡Tú puedes!`;

  // Añadir clase visible a las tarjetas
  document.querySelectorAll(".card").forEach(card => {
    setTimeout(()=>card.classList.add("visible"),200);
  });
});

// Botón para silenciar / activar audio
toggleAudioBtn.addEventListener("click", () => {
  relaxVideo.muted = !relaxVideo.muted;
});

// Estrellas animadas
const starContainer = document.getElementById("starContainer");
const numStars = 200;
for(let i = 0; i < numStars; i++){
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  const size = Math.random() * 6 + 2;
  star.style.width = size + "px";
  star.style.height = size + "px";
  const duration = Math.random() * 15 + 5;
  star.style.animationDuration = duration + "s";
  star.style.animationDelay = Math.random() * 10 + "s";
  starContainer.appendChild(star);
}
