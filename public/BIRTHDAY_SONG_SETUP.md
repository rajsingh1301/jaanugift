# Birthday Song Setup

A birthday song will now play when the "Open My Surprise" button is clicked!

## How to Add the Birthday Song

1. **Find a birthday song** (e.g., "Happy Birthday" instrumental or your favorite birthday song)

2. **Convert it to MP3** format if needed

3. **Name the file** `birthday-song.mp3`

4. **Place it in the `public` folder**:

   ```
   jaanugift/
   ├── public/
   │   ├── birthday-song.mp3  ← Place your birthday song here
   │   └── music.mp3          ← Background music (optional)
   ├── src/
   └── ...
   ```

5. When the user clicks "Open My Surprise", the birthday song will play automatically!

## Song Recommendations

- "Happy Birthday Song" (Traditional instrumental)
- "Happy Birthday to You" (Stevie Wonder version)
- "Birthday" by The Beatles
- Any special song you associate with birthdays

## Important Notes

- File must be named exactly `birthday-song.mp3`
- Place it in the `public` folder (not in `src`)
- Keep file size under 10MB for faster loading
- The song will play once when the button is clicked
- The song continues playing as the user navigates through the gift

## Using a Different File Name

If you want to use a different file name, edit [src/pages/Home.tsx](../src/pages/Home.tsx):

```typescript
audioRef.current = new Audio("/your-birthday-song.mp3");
```

## Testing

1. Add your `birthday-song.mp3` file to the `public` folder
2. Run the development server
3. Wait for the countdown to finish (or set a test date)
4. Click "Open My Surprise" button
5. The birthday song should start playing!
