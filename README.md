# Usagi Romantic Memory Museum 🐰💖

A romantic, interactive **4-page mobile-first website** inspired by **Chiikawa / Usagi aesthetics**, created as a special gift for your girlfriend.

Built purely with **HTML5, CSS3, and Vanilla JavaScript**. No frameworks, no build tools, and no dependencies needed.

---

## 🌸 Live Features

1. **Page 1 — The Introduction**:
   - Cute animated background with floating pastel particles.
   - Usagi character with soft bounce and floating hearts.
   - Touching romantic title and introduction.
   - Interactive start button that begins background music playback and initiates the journey.

2. **Page 2 — The Interactive Journey & Cinematic Transition**:
   - Animated countryside landscape with drifting clouds, pastel hills, and moving road.
   - Sweet mini-game: tap floating hearts to collect cherished memories with Usagi.
   - Cinematic vehicle driving sequence after collection is complete.
   - Usagi drives in a cute pink car with heart exhaust toward the distant Neoclassical "Memory Museum", seamlessly pulling up to its grand doors.

3. **Page 3 — The Memory Museum**:
   - Grand gallery walls with framed photos, museum plaques, and curator Usagi.
   - **Changeable Photos**: Tap "Change Photo" on any exhibit or "Add New Photo" to replace or add custom pictures directly from your device! Automatically saved to your browser.
   - Tap any framed photo to open a high-resolution lightbox modal without image distortion.
   - Golden door leading into the final private room.

4. **Page 4 — The Final Letter**:
   - Romantic quiet archive room with sealed wax envelope.
   - Tap the envelope to unfold the stationery paper.
   - Typewriter typing animation revealing the sincere personal girlfriend day letter.
   - Includes "Skip Typing" and "Replay" controls.
   - Adorable celebration Usagi and sweet signature block upon completion.
   - **Return to Beginning**: An option at the bottom allows jumping back to the first page to restart the experience.

5. **4-Heart Progress Indicator**:
   - Located at the top of the screen to indicate the current page (1 to 4).
   - Unlocked pages can be clicked to navigate back and forth, while unreached pages remain locked so visitors can enjoy the story step by step without skipping ahead.

6. **Audio & Music**:
   - Plays "We Fell In Love In October" (first 10 seconds trimmed off).
   - Starts upon tapping the Page 1 start button.
   - Discreet floating sound toggle at the bottom for easy muting/unmuting.

---

## 📁 Project Structure

```text
/
├── index.html            # Main HTML5 structure
├── style.css             # Soft pink Chiikawa/Usagi styling & animations
├── script.js             # Vanilla JS state, interactions, typewriter & CONFIG
├── assets/
│   ├── images/
│   │   ├── usagi.svg     # Clean Usagi vector character
│   │   ├── usagi.jpg     # Original Usagi reference
│   │   ├── photo1.jpg    # Memory photo exhibit 1
│   │   ├── photo2.jpg    # Memory photo exhibit 2
│   │   └── photo3.jpg    # Memory photo exhibit 3
│   └── audio/
│       └── music.mp3     # Background music (trimmed audio)
└── README.md
```

---

## 🚀 How to Deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `memory-museum`).
2. Upload all the files from this directory to the repository `main` branch.
3. In GitHub, go to **Settings** → **Pages**.
4. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**.
6. Your website will be live in 1–2 minutes!

---

## 🎨 How to Customize Photos & Text

Open `script.js` and look at the `CONFIG` object at the very top:

```javascript
const CONFIG = {
  // Change page 1 text
  page1Title: "Happy Girlfriend Day, Darling!",
  page1Subtitle: "...",

  // Change museum photos & captions
  photos: [
    {
      src: "assets/images/photo1.jpg",
      title: "Where It All Began",
      date: "October Days",
      caption: "Your caption here..."
    },
    // Add as many photos as you want!
  ],

  // Change the final letter text
  finalLetter: `Your letter text here...`
};
```

To replace images, simply drop your photos into `assets/images/` and update the filenames in `CONFIG.photos`.
