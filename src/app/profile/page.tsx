import { getSession } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export default async function Profile() {
  const session = await getSession();

  return (
    session?.user && (
          <main className="app-main">
            <img src={session?.user.picture} alt={session?.user.name} />
            <h2>{session?.user.name}</h2>
            <p>{session?.user.email}</p>
            <br />
            <Link href="/">Home</Link>
          </main>
      )
  );
}