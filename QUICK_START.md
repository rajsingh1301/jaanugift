# ⚡ QUICK START - Customize in 5 Minutes

Before showing this to your girlfriend, customize these 4 files:

## 1️⃣ Set Birthday Date (REQUIRED)

📁 [src/pages/Home.tsx](src/pages/Home.tsx#L19)

```typescript
// Line 19 - Change this date!
const birthdayDate = new Date("2026-01-10 00:00:00");
```

**Change to:** Your girlfriend's actual birthday
**Format:** `'YYYY-MM-DD HH:MM:SS'`

---

## 2️⃣ Personalize Love Story

📁 [src/data/storyData.ts](src/data/storyData.ts)

Replace the 5 sample stories with YOUR real memories:

- First time you talked
- First date
- Special moments
- When you knew she was the one
- Your future together

Each story has:

- `title` - Short headline
- `description` - The story (1-3 sentences)
- `emoji` - A relevant emoji

---

## 3️⃣ Write Your Reasons

📁 [src/data/reasonsData.ts](src/data/reasonsData.ts)

Replace the 10 sample reasons with YOUR feelings:

- What you love about her
- What makes her special
- Why she's perfect for you

Keep it personal and heartfelt!

---

## 4️⃣ Add Your Name

📁 [src/pages/Reasons.tsx](src/pages/Reasons.tsx#L100)

```typescript
// Line 100 - Change this!
Made with ❤️ by Your Love
```

**Change to:** Your actual name

---

## 🎵 Optional: Add Music

1. Get a romantic MP3 file (your song together!)
2. Name it `music.mp3`
3. Put it in the `public` folder

---

## ✅ Quick Test Checklist

Before deploying:

- [ ] Birthday date is correct
- [ ] All stories are personalized
- [ ] All reasons are personalized
- [ ] Your name is added
- [ ] Tested on mobile
- [ ] Music file added (optional)

---

## 🚀 Deploy

### Vercel (Recommended):

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"
6. Done! Copy the URL

### Or Netlify:

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site"
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

---

## 💡 Pro Tips

**For Testing:**
Set birthday to 1 minute from now to test the unlock animation:

```typescript
const birthdayDate = new Date(Date.now() + 60000);
```

**Before Sending:**
Change it back to her real birthday!

---

## 🎁 You're Done!

Once deployed:

1. Keep the link secret
2. Send it on her birthday
3. Wait for her reaction 🥰

**The website is at: http://localhost:5174/**

Press `o` in the terminal to open it in your browser!
