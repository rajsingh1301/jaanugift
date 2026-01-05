# 📸 Adding Images to Your Love Story

## How to Add Images

### Step 1: Prepare Your Images

1. Choose photos for each story (first date, special moments, etc.)
2. Rename them to something simple like:
   - `first-talk.jpg`
   - `first-meet.jpg`
   - `best-memories.jpg`
   - `the-one.jpg`
   - `future.jpg`

### Step 2: Add Images to This Folder

Place all your images in this folder:

```
public/images/
├── first-talk.jpg
├── first-meet.jpg
├── best-memories.jpg
├── the-one.jpg
└── future.jpg
```

### Step 3: Update storyData.ts

Edit `src/data/storyData.ts` and add the `image` field:

```typescript
{
  id: 1,
  title: "The Day We Started Talking",
  description: "I still remember...",
  emoji: "💬",
  image: "/images/first-talk.jpg"  // Add this line!
}
```

## Image Tips

- **Format**: Use .jpg, .png, or .webp
- **Size**: Optimize images (recommended max width: 1200px)
- **Ratio**: 16:9 or 4:3 works best
- **File size**: Keep under 1MB each for fast loading

## Online Image Compression Tools

- [TinyPNG](https://tinypng.com/) - Free compression
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [CompressJPEG](https://compressjpeg.com/)

## Optional: Make Emoji Smaller When Using Images

If you add images, you might want smaller emojis. Edit `src/pages/Story.tsx`:

Change:

```typescript
className = "text-6xl md:text-8xl text-center mb-6";
```

To:

```typescript
className = "text-4xl md:text-6xl text-center mb-4";
```

## Example with All Images

```typescript
export const storyData: StoryItem[] = [
  {
    id: 1,
    title: "The Day We Started Talking",
    description: "I still remember the first time we talked...",
    emoji: "💬",
    image: "/images/first-talk.jpg",
  },
  {
    id: 2,
    title: "Our First Meet",
    description: "When we finally met in person...",
    emoji: "😍",
    image: "/images/first-meet.jpg",
  },
  // ... add image to all stories
];
```

## No Images?

The `image` field is **optional**! If you don't add images, the emoji will display like before.
