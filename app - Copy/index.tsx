import { useEffect } from 'react';
import { Redirect } from 'expo-router';

export default function Index() {
  useEffect(() => {
    console.log("Redirection vers /auth");
  }, []);

  return <Redirect href="/auth" />;
}
