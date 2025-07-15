const emergencyData = [
  {
    name: "Active Threat - Evacuate",
    color: "red",
    description: "Evacuate due to active threat.",
    templateHtml: `<h1>🚨 ACTIVE THREAT / MENACE ACTIVE</h1><p>Please evacuate the building immediately using the nearest exit. Do not use elevators. Follow instructions from security personnel.<br><em>Veuillez évacuer immédiatement le bâtiment en utilisant la sortie la plus proche. N'utilisez pas les ascenseurs. Suivez les instructions du personnel de sécurité.</em></p>`
  },
  {
    name: "Active Threat - Take Shelter",
    color: "red",
    description: "Take shelter immediately.",
    templateHtml: `<h1>🔒 SHELTER IN PLACE / CONFINEMENT</h1><p>Remain indoors. Lock all doors. Stay quiet and away from windows. Await further instructions.<br><em>Restez à l'intérieur. Verrouillez toutes les portes. Restez silencieux et éloignez-vous des fenêtres. Attendez d'autres instructions.</em></p>`
  },
  {
    name: "All Clear",
    color: "green",
    description: "All threats are clear.",
    templateHtml: `<h1>✅ ALL CLEAR / TOUT EST CLAIR</h1><p>The emergency has ended. Normal operations may resume. Thank you for your cooperation.<br><em>L'urgence est terminée. Les opérations normales peuvent reprendre. Merci pour votre coopération.</em></p>`
  },
  {
    name: "Fire in Terminal",
    color: "orange",
    description: "Fire or fire possibility in terminal.",
    templateHtml: `<h1>🔥 FIRE ALERT / ALERTE INCENDIE</h1><p>A fire has been reported. Please evacuate the terminal immediately. Use the stairs and follow fire exit signs.<br><em>Un incendie a été signalé. Veuillez évacuer immédiatement le terminal. Utilisez les escaliers et suivez les panneaux de sortie d'incendie.</em></p>`
  },
  {
    name: "Major Snow Event",
    color: "orange",
    description: "Remain inside due to snow event.",
    templateHtml: `<h1>❄️ SNOW EMERGENCY / URGENCE NEIGE</h1><p>Severe snowfall is occurring. Please remain inside the terminal. Avoid all exterior exits until further notice.<br><em>Une forte chute de neige est en cours. Veuillez rester à l'intérieur du terminal. Évitez toutes les sorties extérieures jusqu'à nouvel ordre.</em></p>`
  },
  {
    name: "Tornado - Take Shelter",
    color: "orange",
    description: "Tornado alert. Seek shelter.",
    templateHtml: `<h1>🌪️ TORNADO WARNING / ALERTE TORNADO</h1><p>Take shelter immediately. Move to interior hallways or designated tornado-safe areas. Stay away from glass.<br><em>Abritez-vous immédiatement. Déplacez-vous vers les couloirs intérieurs ou les zones désignées comme sûres contre les tornades. Éloignez-vous des vitres.</em></p>`
  },
  {
    name: "Logo Test",
    color: "blue",
    description: "Display logo test only.",
    templateHtml: `<h1>🔧 TEST SCREEN / ÉCRAN DE TEST</h1><p>This is a test screen for branding and display verification only.<br><em>Ceci est un écran de test pour la marque et la vérification de l'affichage uniquement.</em></p>`
  },
  {
    name: "ZTest",
    color: "purple",
    description: "Test for development.",
    templateHtml: `<h1>🧪 Z-TEST ALERT / ALERTE Z-TEST</h1><p>This is a development test alert template. No action required.<br><em>Ceci est un modèle d'alerte de test de développement. Aucune action requise.</em></p>`
  }
];

const cardContainer = document.getElementById("emergencyCards");
let selectedCardIndex = null;

function renderCards() {
  emergencyData.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = `card ${item.color}`;
    div.textContent = item.name;
    div.title = item.description;
    div.onclick = () => selectCard(index);
    cardContainer.appendChild(div);
  });
}

function selectCard(index) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add("selected");
      selectedCardIndex = index;
    } else {
      card.classList.remove("selected");
    }
  });
}

function activateSelectedEmergency() {
  if (selectedCardIndex === null) {
    alert("Please select an emergency to activate.");
    return;
  }
  const selected = emergencyData[selectedCardIndex];
  window.open(`display.html?emergency=${encodeURIComponent(selected.name)}&desc=${encodeURIComponent(selected.description)}&color=${selected.color}&template=${encodeURIComponent(selected.templateHtml)}`, "_blank");
}

window.onload = renderCards;
