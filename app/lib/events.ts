// lib/events.ts
export async function getEvents() {
  const res = await fetch("https://api.example.com/events");
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
}
