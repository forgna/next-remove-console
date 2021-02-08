import { useEffect } from "react";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return <p>Redirecting...</p>;
}
