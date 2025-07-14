const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "Yippieee! Bis Morgen dann, Mausi!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();

  // Define predefined romantic date ideas
const dateIdeas = [
  "Gemeinsam ein romantisches Abendessen kochen 🍝",
  "Hand in Hand im Mondlicht spazieren gehen 🌙",
  "Ein Picknick im Park mit Lieblingssnacks machen 🧺",
  "Zusammen das Tanzbein schwingen 💃🕺",
  "Sternschnuppen im Garten zählen ✨",
  "Eine Fahrt im Heißluftballon wagen 🎈",
  "Einen botanischen Garten erkunden 🌸",
  "Ein Open-Air-Konzert unter dem Sternenhimmel genießen 🎶",
  "Eine Kunstgalerie besuchen und Lieblingswerke entdecken 🎨",
  "Ein Wochenende in einer kuscheligen Hütte verbringen 🏡",
  "Einen Kochkurs besuchen und zusammen Neues lernen 🍳",
  "Einen Film-Marathon mit Kuscheldecke starten 🎬",
  "Eine Zugfahrt mit schöner Aussicht unternehmen 🚂",
  "Gemeinsam reiten gehen 🐎",
  "Eine Weinverkostung in einem Weingut erleben 🍷",
  "Zusammen Kajak oder Kanu fahren 🚣",
  "Herzhaft bei einer Comedy-Show lachen 😂",
  "Eine Wanderung mit Picknick in der Natur machen 🥾",
  "Ein Fotoshooting bei Sonnenaufgang oder -untergang machen 📸",
  "Frische Leckereien auf dem Bauernmarkt entdecken 🥐",
  "Ein charmantes, historisches Viertel erkunden 🏘️",
  "Einen DIY-Wellnessabend mit Masken und Kerzen machen 🛁",
  "Eine Fahrradtour durch schöne Landschaften unternehmen 🚴",
  "Ein Themen-Dinner zu Hause mit Deko und Musik gestalten 🍽️",
  "Eine Theateraufführung live erleben 🎭",
  "Eine gemütliche Autofahrt durch die Natur machen 🚗",
  "Eine Schokoladenmanufaktur oder Dessertbar besuchen 🍫",
  "Einen Töpferkurs besuchen und kreativ werden 🏺",
  "Ein lokales Sportevent gemeinsam anfeuern ⚽",
  "Einen Tagesausflug in eine nahegelegene Stadt planen 🗺️",
  "Karaoke singen – zu Hause oder auf der Bühne 🎤",
  "Ein buntes Festival oder einen Jahrmarkt besuchen 🎡",
  "Eine Bootstour auf einem See oder Fluss machen 🚤",
  "In einer Buchhandlung Bücher füreinander aussuchen 📚",
  "Einen Fotografie-Workshop besuchen und Erinnerungen festhalten 📷",
  "Einen neuen Wanderweg entdecken 🌲",
  "An einem Wine & Paint-Abend teilnehmen 🍷🎨",
  "Einen Strand- oder Badetag am See genießen 🏖️",
  "Einen Spieleabend mit Brett- oder Kartenspielen veranstalten 🎲",
  "An einem Quizabend in einer Bar teilnehmen 🧠",
  "Eine Helikoptertour mit Aussicht erleben 🚁",
  "Eine Brauerei besichtigen und neue Sorten probieren 🍺",
  "Eine Flusskreuzfahrt mit romantischem Flair machen 🚢",
  "Ein Museum besuchen und gemeinsam staunen 🖼️",
  "Einen Malkurs besuchen und kreativ werden 🖌️",
  "Eine Wein- und Käseverkostung genießen 🧀🍷",
  "Ein Live-Musik-Event besuchen und tanzen 🎸"
];


  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn"); // You can add a class for styling if needed
  letsGoBtn.style.position = "absolute";

  // Adjust the left position based on screen width
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px"; // Adjust the width as needed

  // Add a click event listener to prompt the user with random romantic date ideas
  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];

    alert(`Was hälst du von: ${selectedDateIdea}`);
    window.location= "https://wa.me/+436763253449?text=Lass uns auf ein Date gehen? Bin EMO Schlampe hihi :3 ";
  });

  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
