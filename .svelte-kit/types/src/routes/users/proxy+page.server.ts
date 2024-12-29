// @ts-nocheck
import type { PageServerLoad } from './$types';
import type { User } from '$lib/types';

export const load = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();
  return { users };
};;null as any as PageServerLoad;