# 🍥 Naruto X WhatsApp Bot

**Created by Toheed < 3 🦢**

A Naruto-themed WhatsApp bot built with Node.js and the official WhatsApp Cloud API.

## Commands

- `/help` — Show commands
- `/naruto` — Naruto mode
- `/jutsu` — Random ninja technique
- `/quote` — Ninja motivation
- `/anime` — Anime mode
- `/about` — Bot information

## Deploy on Render

1. Create a Render Web Service connected to this GitHub repository.
2. Build command: `npm install`
3. Start command: `npm start`
4. Add these environment variables in Render:
   - `VERIFY_TOKEN`
   - `WHATSAPP_TOKEN`
   - `PHONE_NUMBER_ID`
   - `GRAPH_API_VERSION`
5. Deploy the service.
6. Copy your Render HTTPS URL and set the Meta webhook URL to:
   `https://YOUR-SERVICE.onrender.com/webhook`
7. Use the same `VERIFY_TOKEN` in Render and Meta.
8. Subscribe to the WhatsApp `messages` webhook field.

## Security

Never commit real access tokens or app secrets to GitHub. Add them only through Render's Environment settings.

## Important

The bot requires a configured Meta WhatsApp Cloud API app. Render's free service may sleep when idle.

**Created by Toheed < 3 🦢**
