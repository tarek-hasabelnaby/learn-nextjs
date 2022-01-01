import { useRouter } from "next/router";

export default function CollectEvents() {
  const router = useRouter();
  console.log(Object(router.query));
  // API call w\ eventID and then display data to the user

  return <div>{router.query.eventId}</div>;
}
