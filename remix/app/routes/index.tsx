import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

// TODO: work out how to call this function in a unit test
export default function Index() {
  return View(useLoaderData())
}

export function View(loaderData: any) {
  const { message } = loaderData
  return (
    <h1>{message}</h1>
  )
}

export const loader = async () => {
  return json({ message: 'Hello Remix!' })
}