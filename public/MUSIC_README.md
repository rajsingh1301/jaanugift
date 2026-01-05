# Music Instructions

To add background music to your birthday gift website:

1. **Find a romantic song** you both love (e.g., your song, her favorite, etc.)

2. **Convert it to MP3** format if it isn't already

3. **Name the file** `music.mp3`

4. **Place it in the `public` folder** in your project root:

   ```
   jaanugift/
   ├── public/
   │   └── music.mp3  ← Place your music file here
   ├── src/
   └── ...
   ```

5. The music toggle button (bottom right corner) will automatically work!

## Recommended Songs

Some romantic song ideas:

- "Perfect" by Ed Sheeran
- "All of Me" by John Legend
- "Thinking Out Loud" by Ed Sheeran
- "A Thousand Years" by Christina Perri
- Your special song together!

## Important Notes

- Make sure the file is named exactly `music.mp3`
- File should be in the `public` folder, NOT in `src`
- Keep file size reasonable (under 10MB) for faster loading
- Ensure you have the right to use the music

## Optional: Use a Different File Name

If you want to use a different name or format, edit [src/components/MusicToggle.tsx](../src/components/MusicToggle.tsx#L17):

```typescript
audioRef.current = new Audio("/your-music-file.mp3");
```

## No Music?

If you don't want background music, you can simply:

- Not add a music file (the button will appear but won't play anything)
- Or remove the `<MusicToggle />` component from [src/App.tsx](../src/App.tsx)
