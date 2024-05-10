'use client'
import * as React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"


export interface ILoginButtonProps {
}

export default function LoginButton (props: ILoginButtonProps) {
  const { user } = useUser();
  return (
    <Button variant="outline" size="icon">
      <Link href={`/api/auth/${user ? 'logout' : 'login'}`}>
        <User />
      </Link>
    </Button>
  );
}
