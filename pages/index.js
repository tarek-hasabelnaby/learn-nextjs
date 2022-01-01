import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  console.log(featuredEvents);
  return (
    <div className={styles.container}>
      <h1>Home Page!</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
