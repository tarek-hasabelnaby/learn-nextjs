import { useRouter } from "next/router";

export default function EventDetails() {
  const router = useRouter();
  console.log(router.query);
  // API call w\ eventID and then display data to the user

  return <div>{router.query.eventId}</div>;
}
