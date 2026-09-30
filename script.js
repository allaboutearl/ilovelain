/**
 * ==========================================================================
 * USAGI ROMANTIC MEMORY MUSEUM - JAVASCRIPT
 * Fully interactive, mobile-first, no frameworks required.
 * ==========================================================================
 */

// ============================================================================
// 1. EASY CONFIGURATION SECTION
// Anyone can edit this text and memories without touching the code below!
// ============================================================================
const CONFIG = {
  // Page 1: Introduction Screen
  page1Title: "a special day for my darling",
  page1Subtitle: "Usagi prepared a little adventure and a secret museum filled with cherished memories just for you.",
  startButtonText: "Start Our Journey 💕",

  // Page 2: Journey & Mini-Game
  journeyInstruction: "Tap the photos to collect memories with Usagi! 📷✨",
  targetHeartsCount: 5,
  journeyMemories: [
    "✨ Your beautiful bright smile...",
    "💖 The sweetness in your voice...",
    "🌸 The way you make ordinary days special...",
    "🌙 Having cozy, genuine conversations...",
    "💕 How grateful I am to have met you!"
  ],
  usagiCheerWords: ["Yaha! ✨", "Ura! 🌸", "Haa! 💖", "Fuuwa! 💫", "Yahaaa! 🎉"],
  vehicleTransitionText: "All memories collected! Usagi's car is here... 🚗💨",
  museumArrivalText: "Destination Reached: Usagi Museum! 🏛️✨",

  // Page 3: Usagi Museum
  museumTitle: "Usagi Museum",
  museumSubtitle: "",
  photos: [
    {
      src: "assets/images/photo1.jpg",
      title: "Where It All Began",
      date: "October Days",
      caption: "Out of all the people in this world, I somehow ended up meeting you, getting close to you, and being someone I can genuinely love and call mine."
    },
    {
      src: "assets/images/photo2.jpg",
      title: "Sweet Little Moments",
      date: "Cherished Times",
      caption: "Enjoying the quiet times, sharing smiles, and learning each other slowly. Even with the little time we've had together, I'm really grateful for you."
    },
    {
      src: "assets/images/photo3.jpg",
      title: "Under The Same Stars",
      date: "Our Quiet Future",
      caption: "Admiring the sky and looking forward to all the stories and memories we will create together along the way."
    },
    {
      src: "assets/images/photo4.jpg",
      title: "Gentle Laughter",
      date: "Sweet Memories",
      caption: "The random thoughts and funny moments that bring warmth to every day."
    },
    {
      src: "assets/images/photo5.jpg",
      title: "Cozy Days Together",
      date: "Warm Sunsets",
      caption: "Every small second spent by your side is a treasured memory preserved forever."
    },
    {
      src: "assets/images/photo6.jpg",
      title: "Looking Forward",
      date: "Every Tomorrow",
      caption: "Only the beginning of many more beautiful stories we will create together."
    }
  ],

  // Default backup of photos for reset
  defaultPhotosBackup: [
    {
      src: "assets/images/photo1.jpg",
      title: "Where It All Began",
      date: "October Days",
      caption: "Out of all the people in this world, I somehow ended up meeting you, getting close to you, and being someone I can genuinely love and call mine."
    },
    {
      src: "assets/images/photo2.jpg",
      title: "Sweet Little Moments",
      date: "Cherished Times",
      caption: "Enjoying the quiet times, sharing smiles, and learning each other slowly. Even with the little time we've had together, I'm really grateful for you."
    },
    {
      src: "assets/images/photo3.jpg",
      title: "Under The Same Stars",
      date: "Our Quiet Future",
      caption: "Admiring the sky and looking forward to all the stories and memories we will create together along the way."
    },
    {
      src: "assets/images/photo4.jpg",
      title: "Gentle Laughter",
      date: "Sweet Memories",
      caption: "The random thoughts and funny moments that bring warmth to every day."
    },
    {
      src: "assets/images/photo5.jpg",
      title: "Cozy Days Together",
      date: "Warm Sunsets",
      caption: "Every small second spent by your side is a treasured memory preserved forever."
    },
    {
      src: "assets/images/photo6.jpg",
      title: "Looking Forward",
      date: "Every Tomorrow",
      caption: "Only the beginning of many more beautiful stories we will create together."
    }
  ],

  // Page 4: The Final Letter
  letterRoomTitle: "A Letter For You",
  letterRoomDate: "To My Darling • Girlfriend Day Special",
  letterSender: "Forever yours, with all my love ❤️",
  typewriterSpeedMs: 22, // Speed per character (ms)

  // EXACT LETTER TEXT PROVIDED BY USER:
  finalLetter: `happy girlfriend day, darling!

i honestly don't know where to start since we just started and we haven't been together for that long yet. we're still at the very beginning of everything. so i might not have yet many stories to tell or memories to look back. but even with the little time we've had together. im really grateful for having you. it sometimes feel unreal because you'd almost do everything you can just to make me happy. out of all people i could've met, i somehow ended up meeting you, getting close to you, and being someone i can genuinely love and call mine. im really happy that we ended up choosing each other, and i get to be someone who could stay besides you, having a quality time for each other, and hopefully makes your days a little better.

i know we’re still getting to know each other in so many ways. there are probably still a lot of things about me that you don’t know, and the same goes for you. we’ll still have moments where we misunderstand each other, moments where we don’t know what to say, random conversations that make absolutely no sense, and probably a lot of little things we’ll have to learn about each other along the way. but honestly, i like that we’re still at that stage. there’s something nice about knowing that there’s still so much of you for me to discover.
i want to know the little things too. the random thoughts that suddenly appear in your head, the things that make you happy for no reason, the things that annoy you, the things you get excited about, the things you’re embarrassed to talk about, your favorite little habits, the stories you’ve never gotten around to telling me, and even the parts of yourself that you think are difficult to understand. you don’t have to show me everything all at once. i’m okay with learning you slowly. and i hope you know that you don’t have to be a certain way around me just to be loved. you don’t have to always be happy, always know what to say, or always have the perfect response. you can be quiet. you can be tired. you can have a bad day. you can take your time when you need to process things. i’m not expecting you to be perfect, because i’m definitely not perfect either. i just want us to be able to be ourselves around each other without feeling like we have to constantly perform or prove something.

i also want to say sorry about what happened and about how i handled everything. i know our argument started because of the misunderstanding about the pictures you posted sa tiktok mo and i realize na i could’ve communicated my feelings better instead of letting my emotions take over.

hindi naman ako galit sayo for being yourself or for posting what you want. i know na it’s your choice, and i respect that. i just got worried when i saw the revealing pictures, pero i didn’t know how to properly express that without making it seem like i was judging you or telling you what you can and can’t do. i’m not thinking badly of you at all. i just care about you, and sometimes that makes me overthink and become more protective than i should be. i’m sorry if my reaction made you feel controlled or judged,  that was never my intention. i should’ve just calmly told you that i was worried instead of turning it into an argument. i’m really sorry about it darling. i’ll try to communicate better next time.

at the end of everything, i just want you to know kung gaano ako ka-grateful na dumating ka sa buhay ko. i know na we’re still starting out, and marami pa tayong kailangan matutunan about each other, pero genuinely happy ako sa kung anong meron tayo ngayon. hindi ko naman kailangan na ma-figure out natin agad lahat. i just want us to keep being honest with each other, mag-usap kapag may mga bagay na mahirap, and enjoy the little moments na meron tayo. whatever happens next, gusto ko na mangyari siya naturally, without pressure or expectations. i’ll keep trying to understand you, appreciate you, and be here for you as long as comfortable ka na nandito ako. again, happy girlfriend day, darling. i’m really happy na nakilala kita, and i hope this is only the beginning of many more memories na mabubuo natin together`
};


// ============================================================================
// 2. STATE & ELEMENT REFERENCES
// ============================================================================
const state = {
  currentPage: 'page1',
  maxUnlockedPage: 1, // Only Page 1 is accessible until reached
  heartsCollected: 0,
  isMiniGameActive: false,
  isDriving: false,
  isAudioPlaying: false,
  isAudioMuted: false,
  isLetterTyping: false,
  typewriterTimeoutId: null,
  activePhotoIndexToChange: null,
  isAddingNewPhoto: false,
  currentModalPhotoIndex: null
};

// DOM Elements
const elements = {
  bgMusic: document.getElementById('bgMusic'),
  audioToggleBtn: document.getElementById('audioToggleBtn'),
  soundIcon: document.getElementById('soundIcon'),
  ambientDecorations: document.getElementById('ambientDecorations'),

  // 4-Heart Progress Bar
  heartProgressBar: document.getElementById('heartProgressBar'),
  heartSteps: [
    document.getElementById('heartStep1'),
    document.getElementById('heartStep2'),
    document.getElementById('heartStep3'),
    document.getElementById('heartStep4')
  ],
  heartConnectors: [
    document.getElementById('connector1'),
    document.getElementById('connector2'),
    document.getElementById('connector3')
  ],

  // Hidden File Input for Custom Photos
  photoFileInput: document.getElementById('photoFileInput'),

  // Page 1
  page1: document.getElementById('page1'),
  introKicker: document.getElementById('introKicker'),
  page1Title: document.getElementById('page1Title'),
  page1Message: document.getElementById('page1Message'),
  startBtnText: document.getElementById('startBtnText'),
  startJourneyBtn: document.getElementById('startJourneyBtn'),

  // Page 2
  page2: document.getElementById('page2'),
  hudInstruction: document.getElementById('hudInstruction'),
  heartsCollectedCount: document.getElementById('heartsCollectedCount'),
  heartsTargetCount: document.getElementById('heartsTargetCount'),
  journeyToast: document.getElementById('journeyToast'),
  collectiblesLayer: document.getElementById('collectiblesLayer'),
  travelerContainer: document.getElementById('travelerContainer'),
  travelerWalking: document.getElementById('travelerWalking'),
  travelerBoardingScene: document.getElementById('travelerBoardingScene'),
  boardingCarWrapper: document.getElementById('boardingCarWrapper'),
  usagiBoardingCharacter: document.getElementById('usagiBoardingCharacter'),
  boardingSpeech: document.getElementById('boardingSpeech'),
  travelerVehicle: document.getElementById('travelerVehicle'),
  travelerArrivalScene: document.getElementById('travelerArrivalScene'),
  usagiOutsideCar: document.getElementById('usagiOutsideCar'),
  arrivalSpeech: document.getElementById('arrivalSpeech'),
  usagiSpeech: document.getElementById('usagiSpeech'),
  roadTrack: document.getElementById('roadTrack'),
  destinationMuseum: document.getElementById('destinationMuseum'),
  museumEntranceGrand: document.getElementById('museumEntranceGrand'),
  doorwayTransitionPortal: document.getElementById('doorwayTransitionPortal'),
  arrivalBanner: document.getElementById('arrivalBanner'),

  // Page 3 - Museum & Final Discovery Exhibit
  page3: document.getElementById('page3'),
  museumEntranceFoyer: document.getElementById('museumEntranceFoyer'),
  museumTitle: document.getElementById('museumTitle'),
  museumSubtitle: document.getElementById('museumSubtitle'),
  galleryHall: document.getElementById('galleryHall'),
  finalExhibitSection: document.getElementById('finalExhibitSection'),
  displayTableArea: document.getElementById('displayTableArea'),
  tableEnvelopeExhibit: document.getElementById('tableEnvelopeExhibit'),
  envHeartSeal: document.getElementById('envHeartSeal'),
  envelopeDiscoverySparkle: document.getElementById('envelopeDiscoverySparkle'),
  usagiDiscovererScene: document.getElementById('usagiDiscovererScene'),
  usagiNoticeBubble: document.getElementById('usagiNoticeBubble'),
  usagiWalkWrap: document.getElementById('usagiWalkWrap'),
  usagiHeldEnvelope: document.getElementById('usagiHeldEnvelope'),
  letterDiscoveryPrompt: document.getElementById('letterDiscoveryPrompt'),
  openLetterActionBtn: document.getElementById('openLetterActionBtn'),

  // Cinematic Envelope Portal (Zoom & Unfold into Page 4)
  cinematicEnvelopePortal: document.getElementById('cinematicEnvelopePortal'),
  cinematicEnvelopeZoomBox: document.getElementById('cinematicEnvelopeZoomBox'),
  cinematicEnvelopeBody: document.getElementById('cinematicEnvelopeBody'),
  cinematicEnvelopeFlap: document.getElementById('cinematicEnvelopeFlap'),
  cinematicHeartSeal: document.getElementById('cinematicHeartSeal'),
  cinematicLetterSheet: document.getElementById('cinematicLetterSheet'),
  cinematicLightBurst: document.getElementById('cinematicLightBurst'),
  cinematicParticlesCluster: document.getElementById('cinematicParticlesCluster'),

  // Modal
  photoModal: document.getElementById('photoModal'),
  modalBackdrop: document.getElementById('modalBackdrop'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  modalImg: document.getElementById('modalImg'),
  modalTitle: document.getElementById('modalTitle'),
  modalDate: document.getElementById('modalDate'),
  modalCaption: document.getElementById('modalCaption'),
  modalChangePhotoBtn: document.getElementById('modalChangePhotoBtn'),

  // Page 4
  page4: document.getElementById('page4'),
  letterRoomTitle: document.getElementById('letterRoomTitle'),
  letterRoomDate: document.getElementById('letterRoomDate'),
  letterEnvelope: document.getElementById('letterEnvelope'),
  envelopeSeal: document.getElementById('envelopeSeal'),
  letterPaper: document.getElementById('letterPaper'),
  typewriterText: document.getElementById('typewriterText'),
  typewriterCursor: document.getElementById('typewriterCursor'),
  typingStatus: document.getElementById('typingStatus'),
  skipTypingBtn: document.getElementById('skipTypingBtn'),
  replayLetterBtn: document.getElementById('replayLetterBtn'),
  letterSignature: document.getElementById('letterSignature'),
  letterSender: document.getElementById('letterSender'),
  backToStartBtn: document.getElementById('backToStartBtn')
};


// ============================================================================
// 3. INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadSavedCustomPhotos();
  renderConfigTexts();
  renderMuseumExhibits();
  setupAmbientParticles();
  setupEventListeners();
  updateHeartProgressBar();
});

/**
 * Load photos saved in browser storage if available
 */
function loadSavedCustomPhotos() {
  try {
    const saved = localStorage.getItem('usagi_custom_photos');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // If saved list has fewer photos than the updated 6 photos, preserve custom edits and append the rest
        if (parsed.length < CONFIG.photos.length) {
          const merged = [...parsed];
          for (let i = parsed.length; i < CONFIG.photos.length; i++) {
            merged.push(CONFIG.photos[i]);
          }
          CONFIG.photos = merged;
          localStorage.setItem('usagi_custom_photos', JSON.stringify(merged));
        } else {
          CONFIG.photos = parsed;
        }
      }
    }
  } catch (err) {
    console.warn('Could not load custom photos:', err);
  }
}

/**
 * Apply configuration text to all DOM elements
 */
function renderConfigTexts() {
  if (elements.page1Title) {
    elements.page1Title.innerHTML = `<span class="title-text-shimmer">a special day for my darling</span><span class="title-sparkle s1" aria-hidden="true">✨</span><span class="title-sparkle s2" aria-hidden="true">💖</span>`;
  }
  if (elements.page1Message) elements.page1Message.textContent = CONFIG.page1Subtitle;
  if (elements.startBtnText) elements.startBtnText.textContent = CONFIG.startButtonText;

  if (elements.hudInstruction) elements.hudInstruction.textContent = CONFIG.journeyInstruction;
  if (elements.heartsTargetCount) elements.heartsTargetCount.textContent = CONFIG.targetHeartsCount;

  if (elements.museumTitle) elements.museumTitle.textContent = CONFIG.museumTitle;
  if (elements.museumSubtitle) elements.museumSubtitle.remove();

  if (elements.letterRoomTitle) elements.letterRoomTitle.textContent = CONFIG.letterRoomTitle;
  if (elements.letterRoomDate) elements.letterRoomDate.textContent = CONFIG.letterRoomDate;
  if (elements.letterSender) elements.letterSender.textContent = CONFIG.letterSender;
}

/**
 * Render museum photo exhibits with Change Photo buttons (No tap-to-view)
 */
function renderMuseumExhibits() {
  if (!elements.galleryHall) return;
  elements.galleryHall.innerHTML = '';

  CONFIG.photos.forEach((photo, index) => {
    const card = document.createElement('article');
    card.className = 'exhibit-card';

    card.innerHTML = `
      <div class="exhibit-frame">
        <div class="exhibit-img-wrap">
          <img src="${photo.src}" 
               alt="${photo.title || 'Usagi Museum Photo'}" 
               class="exhibit-img"
               loading="lazy"
               onerror="this.onerror=null; this.src='assets/images/photo1.jpg';" />
          <button class="exhibit-change-btn change-card-photo-btn" data-index="${index}" title="Change this photo" aria-label="Change photo">
            <span>📷 Change</span>
          </button>
        </div>
      </div>
    `;

    // Individual "Change Photo" button on the card
    const changeBtn = card.querySelector('.change-card-photo-btn');
    if (changeBtn) {
      changeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerPhotoChange(index);
      });
    }

    elements.galleryHall.appendChild(card);
  });
}

/**
 * Ambient background floating particles (soft hearts, stars, cherry blossoms)
 */
function setupAmbientParticles() {
  if (!elements.ambientDecorations) return;
  const icons = ['🌸', '✨', '💖', '⭐', '☁️', '🌷', '💕'];
  const particleCount = 14;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('span');
    particle.className = 'ambient-particle';
    particle.textContent = icons[Math.floor(Math.random() * icons.length)];
    particle.style.left = `${Math.random() * 95}%`;
    particle.style.animationDuration = `${9 + Math.random() * 10}s`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.fontSize = `${0.9 + Math.random() * 0.7}rem`;
    elements.ambientDecorations.appendChild(particle);
  }
}


// ============================================================================
// 4. EVENT LISTENERS
// ============================================================================
function setupEventListeners() {
  // Start Journey Button triggers music & transitions to Page 2
  if (elements.startJourneyBtn) {
    elements.startJourneyBtn.addEventListener('click', () => {
      startMusicPlayback();
      goToPage('page2');
      startJourneyMiniGame();
    });
  }

  // Audio Toggle (Bottom-left discreet control)
  if (elements.audioToggleBtn) {
    elements.audioToggleBtn.addEventListener('click', toggleAudio);
  }

  // 4-Heart Progress Bar Step Clicks
  elements.heartSteps.forEach((step, idx) => {
    if (!step) return;
    const targetPageNum = idx + 1;
    step.addEventListener('click', (e) => {
      e.preventDefault();
      handleHeartStepClick(targetPageNum);
    });
  });

  // Open Letter Action Button (Triggers Cinematic Envelope Opening)
  if (elements.openLetterActionBtn) {
    elements.openLetterActionBtn.addEventListener('click', (e) => {
      handleOpenLetterClick(e);
    });
  }

  // Setup Observer for Usagi Discovering the Letter at the end of the museum
  setupDiscoveryObserver();

  // Modal: Change Photo Button
  if (elements.modalChangePhotoBtn) {
    elements.modalChangePhotoBtn.addEventListener('click', () => {
      if (state.currentModalPhotoIndex !== null) {
        triggerPhotoChange(state.currentModalPhotoIndex);
      }
    });
  }

  // Hidden File Input Change
  if (elements.photoFileInput) {
    elements.photoFileInput.addEventListener('change', handlePhotoFileSelected);
  }

  // Typewriter Skip & Replay Buttons
  if (elements.skipTypingBtn) {
    elements.skipTypingBtn.addEventListener('click', skipTypewriter);
  }
  if (elements.replayLetterBtn) {
    elements.replayLetterBtn.addEventListener('click', replayTypewriter);
  }

  // Back to First Page Button (Page 4 -> Page 1)
  if (elements.backToStartBtn) {
    elements.backToStartBtn.addEventListener('click', () => {
      resetDiscoveryScene();
      goToPage('page1');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Modal Close Handlers
  if (elements.modalCloseBtn) {
    elements.modalCloseBtn.addEventListener('click', closePhotoModal);
  }
  if (elements.modalBackdrop) {
    elements.modalBackdrop.addEventListener('click', closePhotoModal);
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.photoModal.classList.contains('active')) {
      closePhotoModal();
    }
  });
}


// ============================================================================
// 5. 4-HEART PROGRESS BAR & NAVIGATION GOVERNANCE
// ============================================================================
function handleHeartStepClick(targetPageNum) {
  // If target page has not been reached yet, forbid skipping!
  if (targetPageNum > state.maxUnlockedPage) {
    showLockedStepToast(targetPageNum);
    return;
  }

  // If unlocked, navigate directly
  if (targetPageNum === 4) {
    setupLetterRoom();
  } else if (targetPageNum === 2 && !state.isDriving && state.heartsCollected < CONFIG.targetHeartsCount) {
    startJourneyMiniGame();
  }

  goToPage(`page${targetPageNum}`);
}

function showLockedStepToast(targetPageNum) {
  const roomNames = ["Introduction", "The Journey", "Memory Museum", "Final Letter"];
  const name = roomNames[targetPageNum - 1] || `Room ${targetPageNum}`;
  
  let toast = document.getElementById('lockToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'lockToast';
    toast.className = 'journey-toast';
    toast.style.position = 'fixed';
    toast.style.top = '58px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.zIndex = '120';
    toast.style.boxShadow = '0 8px 24px rgba(255, 92, 138, 0.3)';
    toast.style.border = '2px solid #ff758f';
    toast.style.background = '#ffffff';
    toast.style.color = '#3e2723';
    toast.style.fontWeight = '700';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `🔒 Complete the journey first to unlock <strong>${name}</strong>! 🌸`;
  toast.style.display = 'block';
  toast.style.animation = 'none';
  void toast.offsetWidth;
  toast.style.animation = 'popToast 0.4s ease';

  setTimeout(() => {
    if (toast) toast.style.display = 'none';
  }, 2200);
}

function updateHeartProgressBar() {
  const currentNum = parseInt(state.currentPage.replace('page', ''), 10);

  elements.heartSteps.forEach((step, idx) => {
    if (!step) return;
    const stepNum = idx + 1;
    const heartSpan = step.querySelector('.step-heart');

    step.classList.remove('active', 'unlocked', 'locked');

    if (stepNum === currentNum) {
      step.classList.add('active');
      if (heartSpan) heartSpan.textContent = '💖';
      step.setAttribute('title', `Current: Page ${stepNum}`);
      step.removeAttribute('disabled');
    } else if (stepNum <= state.maxUnlockedPage) {
      step.classList.add('unlocked');
      if (heartSpan) heartSpan.textContent = '💖';
      step.setAttribute('title', `Go to Page ${stepNum}`);
      step.removeAttribute('disabled');
    } else {
      step.classList.add('locked');
      if (heartSpan) heartSpan.textContent = '🤍';
      step.setAttribute('title', `Locked (Reach page ${stepNum} first)`);
      step.setAttribute('disabled', 'true');
    }
  });

  // Connectors
  elements.heartConnectors.forEach((conn, idx) => {
    if (!conn) return;
    if (idx + 2 <= state.maxUnlockedPage) {
      conn.classList.add('unlocked');
    } else {
      conn.classList.remove('unlocked');
    }
  });
}


// ============================================================================
// 6. PHOTO CUSTOMIZATION & REPLACEMENT LOGIC
// ============================================================================
function triggerPhotoChange(index) {
  state.activePhotoIndexToChange = index;
  state.isAddingNewPhoto = false;
  if (elements.photoFileInput) {
    elements.photoFileInput.click();
  }
}

function handlePhotoFileSelected(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const dataUrl = event.target.result;

    if (state.isAddingNewPhoto) {
      const newPhoto = {
        src: dataUrl,
        title: `Sweet Memory #${CONFIG.photos.length + 1}`,
        date: "Special Day",
        caption: "A newly captured memory added to our secret museum collection."
      };
      CONFIG.photos.push(newPhoto);
      showTemporaryToast("New photo added to the museum! 🖼️✨");
    } else if (state.activePhotoIndexToChange !== null && CONFIG.photos[state.activePhotoIndexToChange]) {
      CONFIG.photos[state.activePhotoIndexToChange].src = dataUrl;
      // If modal lightbox is currently open with this photo, update live
      if (elements.photoModal && elements.photoModal.classList.contains('active') && elements.modalImg) {
        elements.modalImg.src = dataUrl;
      }
      showTemporaryToast("Photo updated successfully! ✨");
    }

    // Persist to localStorage
    try {
      localStorage.setItem('usagi_custom_photos', JSON.stringify(CONFIG.photos));
    } catch (err) {
      console.warn('Could not save to localStorage:', err);
    }

    renderMuseumExhibits();

    // Reset input
    elements.photoFileInput.value = '';
    state.activePhotoIndexToChange = null;
    state.isAddingNewPhoto = false;
  };

  reader.readAsDataURL(file);
}

function resetPhotosToDefault() {
  try {
    localStorage.removeItem('usagi_custom_photos');
  } catch (err) {
    console.warn(err);
  }

  // Restore defaults
  CONFIG.photos = JSON.parse(JSON.stringify(CONFIG.defaultPhotosBackup));
  renderMuseumExhibits();

  if (elements.photoModal && elements.photoModal.classList.contains('active')) {
    closePhotoModal();
  }

  showTemporaryToast("Restored original museum photos 🏛️");
}

function showTemporaryToast(message) {
  let toast = document.getElementById('lockToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'lockToast';
    toast.className = 'journey-toast';
    toast.style.position = 'fixed';
    toast.style.top = '58px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.zIndex = '120';
    document.body.appendChild(toast);
  }

  toast.innerHTML = message;
  toast.style.display = 'block';
  toast.style.animation = 'none';
  void toast.offsetWidth;
  toast.style.animation = 'popToast 0.4s ease';

  setTimeout(() => {
    if (toast) toast.style.display = 'none';
  }, 2400);
}


// ============================================================================
// 7. AUDIO PLAYBACK MANAGEMENT
// ============================================================================
function startMusicPlayback() {
  if (!elements.bgMusic) return;
  elements.bgMusic.volume = 0.85;

  const playPromise = elements.bgMusic.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        state.isAudioPlaying = true;
        updateAudioButtonUI();
      })
      .catch((err) => {
        console.warn('Autoplay prevented by browser:', err);
      });
  }
}

function toggleAudio() {
  if (!elements.bgMusic) return;

  if (elements.bgMusic.paused) {
    elements.bgMusic.play()
      .then(() => {
        state.isAudioPlaying = true;
        state.isAudioMuted = false;
        elements.bgMusic.muted = false;
        updateAudioButtonUI();
      })
      .catch(console.warn);
  } else {
    elements.bgMusic.muted = !elements.bgMusic.muted;
    state.isAudioMuted = elements.bgMusic.muted;
    updateAudioButtonUI();
  }
}

function updateAudioButtonUI() {
  if (!elements.audioToggleBtn || !elements.soundIcon) return;
  if (state.isAudioMuted || elements.bgMusic.paused) {
    elements.audioToggleBtn.classList.add('muted');
    elements.soundIcon.textContent = '🔇';
    elements.audioToggleBtn.setAttribute('title', 'Sound is muted (Tap to play)');
  } else {
    elements.audioToggleBtn.classList.remove('muted');
    elements.soundIcon.textContent = '🎵';
    elements.audioToggleBtn.setAttribute('title', 'Sound is playing (Tap to mute)');
  }
}


// ============================================================================
// 8. PAGE NAVIGATION
// ============================================================================
function goToPage(pageId) {
  const pages = ['page1', 'page2', 'page3', 'page4'];
  const pageNum = parseInt(pageId.replace('page', ''), 10);

  // Update max unlocked page
  state.maxUnlockedPage = Math.max(state.maxUnlockedPage, pageNum);

  pages.forEach(p => {
    const el = elements[p];
    if (el) {
      el.classList.remove('active');
    }
  });

  const targetEl = elements[pageId];
  if (targetEl) {
    targetEl.classList.add('active');
    state.currentPage = pageId;
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (pageId === 'page3') {
      setTimeout(setupDiscoveryObserver, 300);
    }
  }

  updateHeartProgressBar();
}


// ============================================================================
// 9. PAGE 2: INTERACTIVE JOURNEY & CINEMATIC VEHICLE
// ============================================================================
function startJourneyMiniGame() {
  state.heartsCollected = 0;
  state.isMiniGameActive = true;
  state.isDriving = false;

  if (elements.heartsCollectedCount) {
    elements.heartsCollectedCount.textContent = '0';
  }
  if (elements.travelerWalking) {
    elements.travelerWalking.style.display = 'flex';
  }
  if (elements.travelerBoardingScene) {
    elements.travelerBoardingScene.style.display = 'none';
  }
  if (elements.usagiBoardingCharacter) {
    elements.usagiBoardingCharacter.classList.remove('jump-into-car');
  }
  if (elements.travelerVehicle) {
    elements.travelerVehicle.style.display = 'none';
  }
  if (elements.travelerArrivalScene) {
    elements.travelerArrivalScene.style.display = 'none';
  }
  if (elements.travelerContainer) {
    elements.travelerContainer.style.transform = 'none';
  }
  if (elements.usagiOutsideCar) {
    elements.usagiOutsideCar.style.transform = 'none';
  }
  if (elements.arrivalSpeech) {
    elements.arrivalSpeech.style.opacity = '1';
  }
  if (elements.roadTrack) {
    elements.roadTrack.classList.remove('fast');
  }
  if (elements.destinationMuseum) {
    elements.destinationMuseum.classList.remove('approaching', 'parked', 'camera-push-doorway');
  }
  if (elements.museumEntranceGrand) {
    elements.museumEntranceGrand.classList.remove('doors-open');
  }
  if (elements.doorwayTransitionPortal) {
    elements.doorwayTransitionPortal.classList.remove('active');
  }
  if (elements.collectiblesLayer) {
    elements.collectiblesLayer.innerHTML = '';
  }

  showJourneyToast(CONFIG.journeyInstruction);
  spawnNextCollectible();
}

/**
 * Spawns a floating collectible photo snapshot at an accessible position on mobile
 */
function spawnNextCollectible() {
  if (!state.isMiniGameActive || state.heartsCollected >= CONFIG.targetHeartsCount) return;
  if (!elements.collectiblesLayer) return;

  elements.collectiblesLayer.innerHTML = '';

  const photoItem = document.createElement('div');
  photoItem.className = 'collectible-photo-item';

  const photoIndex = state.heartsCollected % CONFIG.photos.length;
  const currentPhoto = CONFIG.photos[photoIndex];
  const photoSrc = currentPhoto && currentPhoto.src ? currentPhoto.src : 'assets/images/photo1.jpg';

  photoItem.innerHTML = `
    <div class="mini-polaroid-frame">
      <img src="${photoSrc}" alt="Memory Photo" class="mini-polaroid-img" onerror="this.src='assets/images/photo1.jpg';" />
      <span class="mini-polaroid-heart">📷</span>
    </div>
    <span class="tap-hint-badge">Tap photo! 👆</span>
  `;

  // Responsive random bounds
  const minX = 18;
  const maxX = 72;
  const minY = 20;
  const maxY = 50;

  const posX = Math.floor(minX + Math.random() * (maxX - minX));
  const posY = Math.floor(minY + Math.random() * (maxY - minY));

  photoItem.style.left = `${posX}%`;
  photoItem.style.top = `${posY}%`;

  const onPhotoCollect = (e) => {
    e.stopPropagation();
    collectHeart(photoItem, posX, posY);
  };

  photoItem.addEventListener('click', onPhotoCollect);
  photoItem.addEventListener('touchstart', onPhotoCollect, { passive: true });

  elements.collectiblesLayer.appendChild(photoItem);
}

/**
 * Handles collecting a photo snapshot in the mini-game
 */
function collectHeart(heartEl, x, y) {
  if (!state.isMiniGameActive) return;

  state.heartsCollected++;
  if (elements.heartsCollectedCount) {
    elements.heartsCollectedCount.textContent = state.heartsCollected;
  }

  // Create burst effect at photo position
  createCollectBurst(x, y);

  // Usagi cheers & speech updates
  if (elements.usagiSpeech) {
    const cheer = CONFIG.usagiCheerWords[state.heartsCollected - 1] || 'Yaha! 💖';
    elements.usagiSpeech.textContent = cheer;
  }

  // Toast with sweet romantic micro-message
  const message = CONFIG.journeyMemories[state.heartsCollected - 1] || 'Sweet memory unlocked! ✨';
  showJourneyToast(message);

  // Remove current photo
  if (heartEl && heartEl.parentNode) {
    heartEl.remove();
  }

  // Check if all collected
  if (state.heartsCollected >= CONFIG.targetHeartsCount) {
    state.isMiniGameActive = false;
    setTimeout(() => {
      startCinematicVehicleJourney();
    }, 800);
  } else {
    setTimeout(spawnNextCollectible, 600);
  }
}

/**
 * Visual pop particles on photo tap
 */
function createCollectBurst(x, y) {
  if (!elements.collectiblesLayer) return;
  const burstIcons = ['✨', '📷', '🌸', '💫', '💖'];

  for (let i = 0; i < 4; i++) {
    const fx = document.createElement('span');
    fx.className = 'collectible-pop-fx';
    fx.textContent = burstIcons[i % burstIcons.length];
    fx.style.left = `calc(${x}% + ${(Math.random() - 0.5) * 40}px)`;
    fx.style.top = `calc(${y}% + ${(Math.random() - 0.5) * 40}px)`;
    elements.collectiblesLayer.appendChild(fx);

    setTimeout(() => fx.remove(), 750);
  }
}

function showJourneyToast(text) {
  if (!elements.journeyToast) return;
  elements.journeyToast.textContent = text;
  elements.journeyToast.style.animation = 'none';
  void elements.journeyToast.offsetWidth;
  elements.journeyToast.style.animation = 'popToast 0.4s ease';
}

/**
 * CINEMATIC VEHICLE JOURNEY TO THE USAGI MUSEUM
 * Fully animated sequence:
 * 1. Vehicle arrives & parks beside Usagi first!
 * 2. Usagi hops into the vehicle.
 * 3. Usagi is seated in the driver's seat.
 * 4. Vehicle starts accelerating along the road.
 * 5. USAGI MUSEUM appears in the distance.
 * 6. Car arrives and parks in front of the museum steps.
 * 7. Usagi steps out and walks to the grand doors.
 * 8. Double doors swing open with warm golden light flood.
 * 9. Camera pushes through doorway into Page 3.
 */
function startCinematicVehicleJourney() {
  state.isDriving = true;

  // 1. Vehicle appears first on the road next to Usagi!
  if (elements.travelerWalking) elements.travelerWalking.style.display = 'none';
  if (elements.travelerBoardingScene) elements.travelerBoardingScene.style.display = 'flex';
  if (elements.boardingSpeech) elements.boardingSpeech.textContent = "Vehicle is here! 🚗✨";
  showJourneyToast("All photos collected! Usagi's car has arrived! 🚗💨");

  // 2. Usagi hops into the car animation
  setTimeout(() => {
    if (elements.usagiBoardingCharacter) {
      elements.usagiBoardingCharacter.classList.add('jump-into-car');
    }
    if (elements.boardingSpeech) {
      elements.boardingSpeech.textContent = "Hop in! 🌸";
    }
  }, 1000);

  // 3. Usagi lands in driver seat, settles in!
  setTimeout(() => {
    if (elements.travelerBoardingScene) elements.travelerBoardingScene.style.display = 'none';
    if (elements.travelerVehicle) elements.travelerVehicle.style.display = 'block';
    showJourneyToast("Usagi is behind the wheel! Let's drive to the museum! 🚗💨");
  }, 1900);

  // 4. Now the vehicle starts moving!
  setTimeout(() => {
    if (elements.roadTrack) elements.roadTrack.classList.add('fast');
    if (elements.travelerContainer) {
      elements.travelerContainer.style.transform = 'translateX(20px)';
    }
  }, 2600);

  // 5. Museum appears on the horizon
  setTimeout(() => {
    if (elements.destinationMuseum) {
      elements.destinationMuseum.classList.add('approaching');
    }
    showJourneyToast("Look ahead! The USAGI MUSEUM is in sight! 🏛️✨");
  }, 4400);

  // 6. Car slows down as it reaches the museum entrance
  setTimeout(() => {
    if (elements.roadTrack) elements.roadTrack.classList.remove('fast');
    if (elements.destinationMuseum) {
      elements.destinationMuseum.classList.remove('approaching');
      elements.destinationMuseum.classList.add('parked');
    }
    showJourneyToast("Arriving at the USAGI MUSEUM... 🌸");
  }, 6600);

  // 7. Car parks, Usagi steps out!
  setTimeout(() => {
    if (elements.travelerVehicle) elements.travelerVehicle.style.display = 'none';
    if (elements.travelerArrivalScene) elements.travelerArrivalScene.style.display = 'flex';
    if (elements.arrivalSpeech) elements.arrivalSpeech.textContent = "We're here! The Usagi Museum! ✨";
    showJourneyToast("We've arrived! Let's head inside the museum... 💖");
  }, 7600);

  // 8. Usagi approaches grand steps
  setTimeout(() => {
    if (elements.usagiOutsideCar) {
      elements.usagiOutsideCar.style.transform = 'translateX(35px) translateY(-8px)';
      elements.usagiOutsideCar.style.transition = 'transform 1.8s ease';
    }
    if (elements.arrivalSpeech) {
      elements.arrivalSpeech.style.opacity = '0';
    }
  }, 9000);

  // 9. Double doors swing open! Warm golden museum interior light floods out!
  setTimeout(() => {
    if (elements.museumEntranceGrand) {
      elements.museumEntranceGrand.classList.add('doors-open');
    }
    showJourneyToast("The museum doors are opening for you... ✨🏛️");
  }, 10200);

  // 10. Camera glides forward directly through doorway
  setTimeout(() => {
    if (elements.destinationMuseum) {
      elements.destinationMuseum.classList.add('camera-push-doorway');
    }
    if (elements.doorwayTransitionPortal) {
      elements.doorwayTransitionPortal.classList.add('active');
    }
  }, 11400);

  // 11. Pass through threshold into Page 3 (Museum Interior)
  setTimeout(() => {
    goToPage('page3');
    window.scrollTo({ top: 0, behavior: 'instant' });

    setTimeout(() => {
      if (elements.doorwayTransitionPortal) {
        elements.doorwayTransitionPortal.classList.remove('active');
      }
    }, 400);
  }, 12600);
}


// ============================================================================
// 10. PAGE 3 -> PAGE 4: USAGI DISCOVERS THE LETTER & CINEMATIC OPENING
// ============================================================================
let discoverySequenceActive = false;
let discoverySequenceDone = false;

function setupDiscoveryObserver() {
  if (!elements.finalExhibitSection) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !discoverySequenceActive && !discoverySequenceDone) {
          playUsagiDiscoverySequence();
        }
      });
    }, { threshold: 0.35 });
    observer.observe(elements.finalExhibitSection);
  } else {
    setTimeout(() => {
      if (state.currentPage === 'page3' && !discoverySequenceActive && !discoverySequenceDone) {
        playUsagiDiscoverySequence();
      }
    }, 1200);
  }
}

/**
 * ANIMATION: Usagi discovers the final museum exhibit envelope
 * 1. Camera gently focuses toward display table
 * 2. Usagi notices envelope (!)
 * 3. Usagi walks/hops toward table
 * 4. Usagi pauses beside table
 * 5. Usagi looks at envelope
 * 6. Sparkle appears above envelope
 * 7. Heart seal glows & pulses
 * 8. Usagi reaches toward envelope
 * 9. Envelope gently floats into paws
 * 10. Usagi picks it up
 * 11. Subtle prompt appears: "Open it?" with cute button "♡ Open Letter"
 */
function playUsagiDiscoverySequence() {
  if (discoverySequenceActive || discoverySequenceDone) return;
  discoverySequenceActive = true;

  // 1. Gently scroll exhibit into view if not already
  if (elements.finalExhibitSection && state.currentPage === 'page3') {
    elements.finalExhibitSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // 2. Usagi notices the envelope! Pop bubble
  setTimeout(() => {
    if (elements.usagiNoticeBubble) {
      elements.usagiNoticeBubble.classList.add('pop');
    }
  }, 600);

  // 3. Usagi walks / hops toward table
  setTimeout(() => {
    if (elements.usagiDiscovererScene) {
      elements.usagiDiscovererScene.style.transform = 'translateX(105px)';
    }
  }, 1200);

  // 4. Usagi pauses beside table, notice bubble fades
  setTimeout(() => {
    if (elements.usagiNoticeBubble) {
      elements.usagiNoticeBubble.classList.remove('pop');
      elements.usagiNoticeBubble.style.opacity = '0';
    }
  }, 2200);

  // 5 & 6. Usagi looks at envelope, small sparkle appears above it
  setTimeout(() => {
    if (elements.envelopeDiscoverySparkle) {
      elements.envelopeDiscoverySparkle.classList.add('active');
    }
  }, 2600);

  // 8 & 9. Usagi reaches toward envelope, envelope moves toward Usagi
  setTimeout(() => {
    if (elements.tableEnvelopeExhibit) {
      elements.tableEnvelopeExhibit.style.transform = 'translateX(-30px) translateY(-14px) scale(0.85)';
      elements.tableEnvelopeExhibit.style.opacity = '0';
    }
  }, 3300);

  // 10. Usagi picks it up!
  setTimeout(() => {
    if (elements.usagiHeldEnvelope) {
      elements.usagiHeldEnvelope.style.display = 'block';
    }
    if (elements.envelopeDiscoverySparkle) {
      elements.envelopeDiscoverySparkle.classList.remove('active');
    }
  }, 3900);

  // 11. Subtle prompt: "Open it?" with "♡ Open Letter"
  setTimeout(() => {
    if (elements.letterDiscoveryPrompt) {
      elements.letterDiscoveryPrompt.style.display = 'flex';
      elements.letterDiscoveryPrompt.style.opacity = '1';
    }
    discoverySequenceActive = false;
    discoverySequenceDone = true;
  }, 4500);
}

/**
 * ENVELOPE OPENING ANIMATION:
 * 1. Usagi holds envelope
 * 2. Camera zooms toward envelope with soft background blur
 * 3. Heart seal gently breaks/opens with sparkle flash
 * 4. Flap opens upward in 3D perspective
 * 5. Folded letter slides out smoothly
 * 6. Letter unfolds toward camera with warm backlighting
 * 7. Camera continues into letter paper
 * 8. Seamlessly transitions into Page 4 letter reading!
 */
function handleOpenLetterClick(e) {
  if (e) {
    createHeartParticlesAroundElement(elements.openLetterActionBtn || e.currentTarget);
  }

  // Fade out prompt
  if (elements.letterDiscoveryPrompt) {
    elements.letterDiscoveryPrompt.style.opacity = '0';
  }

  // 1. Zoom toward envelope with soft background blur
  if (elements.cinematicEnvelopePortal) {
    elements.cinematicEnvelopePortal.classList.add('active');
    setTimeout(() => {
      elements.cinematicEnvelopePortal.classList.add('zoom-in');
    }, 60);
  }

  // 2. Heart seal breaks, flap opens
  setTimeout(() => {
    if (elements.cinematicEnvelopePortal) {
      elements.cinematicEnvelopePortal.classList.add('open-envelope');
    }
  }, 950);

  // 3. Folded letter unfolds toward camera
  setTimeout(() => {
    if (elements.cinematicEnvelopePortal) {
      elements.cinematicEnvelopePortal.classList.add('unfold-zoom');
    }
  }, 2100);

  // 4. Letter fills screen -> Seamlessly transition to Page 4!
  setTimeout(() => {
    goToPage('page4');
    setupLetterRoom();
    startTypewriterEffect();
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Smoothly clean up cinematic envelope portal
    setTimeout(() => {
      if (elements.cinematicEnvelopePortal) {
        elements.cinematicEnvelopePortal.classList.remove('active', 'zoom-in', 'open-envelope', 'unfold-zoom');
      }
    }, 600);
  }, 3300);
}

function createHeartParticlesAroundElement(el) {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const emojis = ['💖', '✨', '🌸', '💕', '⭐'];
  for (let i = 0; i < 7; i++) {
    const p = document.createElement('span');
    p.textContent = emojis[i % emojis.length];
    p.style.position = 'fixed';
    p.style.left = (rect.left + rect.width / 2 + (Math.random() - 0.5) * 30) + 'px';
    p.style.top = (rect.top + rect.height / 2 + (Math.random() - 0.5) * 16) + 'px';
    p.style.fontSize = (13 + Math.random() * 8) + 'px';
    p.style.pointerEvents = 'none';
    p.style.zIndex = '350';
    p.style.transition = 'transform 0.85s cubic-bezier(0.2, 0.8, 0.3, 1), opacity 0.85s ease';
    document.body.appendChild(p);

    requestAnimationFrame(() => {
      const angle = (i / 7) * 2 * Math.PI;
      const dist = 38 + Math.random() * 26;
      p.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist - 20}px) scale(1.15)`;
      p.style.opacity = '0';
    });

    setTimeout(() => p.remove(), 950);
  }
}

function resetDiscoveryScene() {
  discoverySequenceActive = false;
  discoverySequenceDone = false;
  if (elements.usagiNoticeBubble) {
    elements.usagiNoticeBubble.classList.remove('pop');
    elements.usagiNoticeBubble.style.opacity = '1';
  }
  if (elements.usagiDiscovererScene) {
    elements.usagiDiscovererScene.style.transform = 'none';
  }
  if (elements.tableEnvelopeExhibit) {
    elements.tableEnvelopeExhibit.style.transform = 'none';
    elements.tableEnvelopeExhibit.style.opacity = '1';
  }
  if (elements.envelopeDiscoverySparkle) {
    elements.envelopeDiscoverySparkle.classList.remove('active');
  }
  if (elements.usagiHeldEnvelope) {
    elements.usagiHeldEnvelope.style.display = 'none';
  }
  if (elements.letterDiscoveryPrompt) {
    elements.letterDiscoveryPrompt.style.display = 'none';
    elements.letterDiscoveryPrompt.style.opacity = '1';
  }
  if (elements.cinematicEnvelopePortal) {
    elements.cinematicEnvelopePortal.classList.remove('active', 'zoom-in', 'open-envelope', 'unfold-zoom');
  }
}

function closePhotoModal() {
  if (!elements.photoModal) return;
  elements.photoModal.classList.remove('active');
  elements.photoModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}


// ============================================================================
// 11. PAGE 4: THE FINAL LETTER & TYPEWRITER ANIMATION
// ============================================================================
function setupLetterRoom() {
  if (elements.letterEnvelope) elements.letterEnvelope.style.display = 'none';
  if (elements.letterPaper) elements.letterPaper.style.display = 'block';
  if (elements.letterSignature) elements.letterSignature.style.display = 'none';
}

/**
 * Initiates the typewriter typing sequence
 */
function startTypewriterEffect() {
  if (!elements.typewriterText) return;

  clearTimeout(state.typewriterTimeoutId);
  elements.typewriterText.textContent = '';
  if (elements.typewriterCursor) elements.typewriterCursor.style.display = 'inline-block';
  if (elements.letterSignature) elements.letterSignature.style.display = 'none';
  if (elements.typingStatus) elements.typingStatus.style.display = 'flex';

  state.isLetterTyping = true;
  const fullText = CONFIG.finalLetter;
  let charIndex = 0;

  function typeNextChar() {
    if (!state.isLetterTyping) return;

    if (charIndex < fullText.length) {
      elements.typewriterText.textContent += fullText.charAt(charIndex);
      charIndex++;

      // Natural cadence: slightly longer pause after punctuation
      const currentChar = fullText.charAt(charIndex - 1);
      let delay = CONFIG.typewriterSpeedMs;
      if (currentChar === '.' || currentChar === '?' || currentChar === '!') {
        delay = 140;
      } else if (currentChar === '\n') {
        delay = 200;
      }

      state.typewriterTimeoutId = setTimeout(typeNextChar, delay);
    } else {
      finishTypewriter();
    }
  }

  typeNextChar();
}

/**
 * Skips typewriter effect and immediately displays full letter
 */
function skipTypewriter() {
  clearTimeout(state.typewriterTimeoutId);
  if (elements.typewriterText) {
    elements.typewriterText.textContent = CONFIG.finalLetter;
  }
  finishTypewriter();
}

/**
 * Replays the typewriter typing effect
 */
function replayTypewriter() {
  clearTimeout(state.typewriterTimeoutId);
  startTypewriterEffect();
}

/**
 * Concludes letter typing and reveals signature & Usagi celebration
 */
function finishTypewriter() {
  state.isLetterTyping = false;
  clearTimeout(state.typewriterTimeoutId);

  if (elements.typewriterCursor) elements.typewriterCursor.style.display = 'none';
  if (elements.typingStatus) elements.typingStatus.style.display = 'none';
  if (elements.letterSignature) {
    elements.letterSignature.style.display = 'block';
  }
}
