# Esther’s Light Wholehearted Year setup

## What this update adds

- A Wholehearted Year dashboard with daily Word, reflection, and rhythm check-ins
- A year-long plan library, fasting guide builder, EFF collegiate ministry hub, and help pathways
- Account, saved-progress, and text-message opt-in interfaces ready for secure connection

## Make accounts and saved progress live

1. Create a new Supabase project named **Esther’s Light**.
2. In Supabase, open **SQL Editor**, paste all of `esthers-light-supabase.sql`, and click **Run**.
3. In Supabase **Authentication**, enable Email sign-in. Keep email confirmation turned on.
4. Copy the project **API URL** and **publishable key** into `supabase-config.js`.
5. Upload the updated files to GitHub. Vercel will deploy them.

Never put a Supabase secret key in `supabase-config.js` or GitHub.

## Automatic texts

The site now securely records a signed-in student’s preferences and consent. Actual message sending needs a separate texting provider and a secure server-side connection. Do not put texting-provider secret keys in the website files.
