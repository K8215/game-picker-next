# Game Picker Next

Game Picker Next is a web application that retrieves a list of games from a Steam user's library and randomly selects one for the user to play.

See it here: [http://game-picker-9000-app.glitch.me/](https://game-picker-next.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

API KEY INSTRUCTIONS:
This application accesses the Steam Web API. You must obtain a unique API key from Steam in order to host the application yourself. 

1. Visit https://steamcommunity.com/dev/apikey and log in to recieve a key.
2. Create a .env.local file in the root of the project.
3. Paste the following into the .env.local file: API_KEY=[api key here] 
4. Replace the brackets and their contents with your key.
5. Give it a whirl.

## Usage

To use Game Picker Next, enter a Steam ID number from a public profile to retrieve the list of games from. Once you have entered a valid Steam ID and clicked the "Submit" button, the application will print the library associated with that account and randomly select a game for you to play. Check the filter box to exclude games that have already been played.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
