# 🎂 Birthday Gift Website for My Girlfriend

A romantic, interactive birthday surprise website built with React, TypeScript, and lots of love! ❤️

## ✨ Features

- **Countdown Timer**: Shows time remaining until birthday with a locked surprise button
- **Love Story Timeline**: Beautiful animated journey through your relationship milestones
- **Reasons I Love You**: Card slider showing all the reasons why she's special
- **Confetti Animations**: Celebratory effects when countdown finishes and on final page
- **Background Music**: Optional romantic music with play/pause control
- **Responsive Design**: Works perfectly on mobile and desktop
- **Smooth Animations**: Using Framer Motion for fluid transitions

## 🎨 Design

- Pastel pink, purple, and blue gradient backgrounds
- Rounded cards with frosted glass effect
- Cute emojis throughout
- Mobile-first responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or download this project

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to the URL shown (usually http://localhost:5173)

## 📝 Customization Guide

### 1. Set the Birthday Date

Edit [src/pages/Home.tsx](src/pages/Home.tsx#L20):

```typescript
const birthdayDate = new Date("2026-01-10 00:00:00");
```

Change to your girlfriend's actual birthday!

### 2. Customize the Love Story

Edit [src/data/storyData.ts](src/data/storyData.ts):

- Change titles, descriptions, and emojis
- Add or remove slides
- Make it personal with YOUR real memories!

### 3. Add Your Own Reasons

Edit [src/data/reasonsData.ts](src/data/reasonsData.ts):

- Replace with your own reasons
- Add more or fewer reasons
- Make each one personal and heartfelt

### 4. Add Your Name

Edit [src/pages/Reasons.tsx](src/pages/Reasons.tsx#L100):

```typescript
Made with ❤️ by Your Love
```

Change "Your Love" to your actual name!

### 5. Add Background Music (Optional)

1. Find a romantic song you both love
2. Convert it to MP3 format
3. Name it `music.mp3`
4. Place it in the `public` folder
5. The music toggle button will work automatically!

## 📁 Project Structure

```
src/
├── components/
│   ├── CountdownTimer.tsx    # Countdown timer component
│   ├── ConfettiEffect.tsx    # Confetti animation
│   └── MusicToggle.tsx       # Background music control
├── pages/
│   ├── Home.tsx              # Landing page with countdown
│   ├── Story.tsx             # Love story timeline
│   └── Reasons.tsx           # Why I love you cards
├── data/
│   ├── storyData.ts          # Story content (CUSTOMIZE THIS!)
│   └── reasonsData.ts        # Reasons list (CUSTOMIZE THIS!)
├── types/
│   └── index.ts              # TypeScript interfaces
├── App.tsx                   # Main app with routing
├── main.tsx                  # Entry point
└── index.css                 # Global styles
```

## 🎭 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **React Router DOM** - Navigation
- **Canvas Confetti** - Confetti effects

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Click "Deploy"
5. Done! Share the link with your girlfriend 🎉

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

## 💡 Tips

1. **Test the countdown**: Set the birthday date to a few minutes from now to test the unlock animation
2. **Preview on mobile**: Make sure it looks good on her phone!
3. **Add personal photos**: You could extend this to include image galleries
4. **Keep it secret**: Don't spoil the surprise!
5. **Music licensing**: Make sure you have the right to use any background music

## 🎁 Making It Extra Special

- Record a voice message and add it as an audio element
- Create custom illustrations or photos for each story slide
- Add her favorite colors to the theme
- Include inside jokes or special memories
- Time the launch perfectly for her birthday!

## 📜 License

This is a personal gift project. Feel free to use it as inspiration for your own romantic gestures! ❤️

## 🙏 Acknowledgments

Made with love for someone special. May your relationship be filled with joy, laughter, and endless love! 💕

---

**Remember**: The best gift is the thought and effort you put into it. Customize everything to make it truly yours!

Happy Birthday to your girlfriend! 🎂🎉❤️
