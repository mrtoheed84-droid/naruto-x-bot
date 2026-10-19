const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN || "change-this-token";

app.get("/", (_req, res) => {
  res.send("Naruto X is running! Created by Toheed < 3 🦢");
});

app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});

app.post("/webhook", (req, res) => {
  // Acknowledge Meta's webhook quickly.
  res.sendStatus(200);

  try {
    const entries = req.body.entry || [];

    for (const entry of entries) {
      for (const change of entry.changes || []) {
        const messages = change.value?.messages || [];

        for (const message of messages) {
          console.log("Incoming WhatsApp message:", message.type);
          // Next we'll add the reply logic here.
        }
      }
    }
  } catch (error) {
    console.error("Webhook processing error:", error.message);
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Naruto X listening on port ${PORT}`);
});
