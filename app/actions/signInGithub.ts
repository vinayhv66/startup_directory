// app/actions/signInGithub.ts
'use server'

import { signIn } from '../auth'

export async function signInWithGithub() {
  await signIn('github');
}
