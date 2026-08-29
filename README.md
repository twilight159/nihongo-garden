# Nihongo Garden

A responsive, installable Japanese N4 flashcard and quiz website designed for iPhone, iPad, and desktop browsers.

## Features

- Six original N4-level vocabulary and grammar decks
- Japanese pronunciation using the device's built-in speech voice
- Kana readings and romaji on every study card
- Deck-completion celebration and actionable answer explanations
- XP, levels, and unlockable learning badges
- Example sentences and expandable usage guides for every card
- 72 searchable dictionary entries and selectable 6-card, 12-card, or full-deck sessions
- Flip-card study mode with shuffle and confidence ratings
- Five-question mixed quizzes with immediate feedback
- Local progress, mastery, accuracy, and streak tracking
- Offline support through a service worker
- Responsive touch-friendly layout with iOS safe-area support

## Run locally

Serve the folder over HTTP (service workers do not run from `file://`):

```sh
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Content note

The learning progression was inspired by common N4 topics and the user's copy of *Minna no Nihongo Shokyuu II*. All deck wording, examples, questions, and visual design in this repository are original and the source PDF is not included.
