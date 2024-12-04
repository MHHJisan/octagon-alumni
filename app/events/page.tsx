// app/events/page.tsx
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getEvents } from "@/app/lib/events";

export default async function EventsPage() {
  // Fetch data inside the async page function
  const events = await getEvents();

  return (
    <div>
      <Header />
      <main>
        <h2>Upcoming Events</h2>
        {events.map((event) => (
          <div key={event.id}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
