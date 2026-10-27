# شەترەنجا ئۆنلاین — ڕێکخستن

یاری ل سەر GitHub Pages کار دکەت. Firebase وەک سێرڤەر کار دکەت (بێ پارە): هەژمار ب Google/Gmail، لڤینێن ڕاستەوخۆ، و هژمارتنا یاریکەرێن ئۆنلاین.

## ١. فایلان بار بکە بۆ GitHub
`index.html` و `database.rules.json` بار بکە بۆ ناڤ ڕێپۆیا خۆ.
پشتی کو GitHub Pages چالاک بوو، لینکا یاریێ دێ ئەڤە بیت:
`https://zeravan180.github.io/chess/`

## ٢. پڕۆژەیەکا Firebase چێکە
1. بچە سەر https://console.firebase.google.com و پڕۆژەیەکا نوو چێکە.
2. **Build → Authentication → Get started → Sign-in method → Google → Enable**.
3. ل **Authentication → Settings → Authorized domains** ڤێ زێدە بکە: `zeravan180.github.io`
4. **Build → Realtime Database → Create database**، و پاشان **Start in locked mode** هەلبژێرە.
5. ل تابا **Rules**، ناڤەڕۆکا `database.rules.json` تێدا بنڤیسە و **Publish** بکە.

## ٣. کلیلێن Firebase بخە د ناڤ یاریێ دا
1. **Project settings (⚙) → Your apps → Web (</>)**: ئەپەکێ زێدە بکە.
2. `firebaseConfig` کۆپی بکە و ل جهێ ڤێ بەشێ د `index.html` دا دانە:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "....firebaseapp.com",
  databaseURL: "https://....firebaseio.com",
  projectId: "...",
  appId: "..."
};
```

`databaseURL` گەلەک گرنگە. ئەگەر د کۆپیێ دا نەبیت، ژ پەیجا Realtime Database وەربگرە.

ئەڤ کلیلە نهێنی نینن. د هەمی پەیجێن Firebase دا ئاشکەرانە، و پاراستنا داتایان ب ڕێکا Rules دبیت.
