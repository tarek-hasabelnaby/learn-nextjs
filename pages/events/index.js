import Link from "next/link";

export default function Events() {
  const data = [
    { id: "1", name: "ox" },
    { id: "2", name: "oy" },
  ];
  return (
    <div>
      Dashboard
      <ul>
        {data.map((event) => {
          return (
            <li key={event.id}>
              <Link href={`/events/${event.id}`}>{event.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
