# Bible data and licensing

This MVP includes only representative passages identified as World English Bible (WEB) text. The WEB is public domain. Do not replace it with NIV, NLT, NKJV, ESV, CSB, The Message, or another copyrighted translation without the translation owner’s authorization.

The reader is intentionally structured as `chapters[book].chapters[chapter] = [[verseNumber, text]]` in `app.js`. For production, move that object into one small JSON file per book and load only the selected book/chapter. Keep the adapter independent from any provider. If an API needs a secret token, use a server-side function; never put that secret in browser JavaScript.

Suggested schema:

```json
{"book":"John","chapter":1,"translation":"WEB","verses":[{"number":1,"text":"..."}]}
```
