// import Image from 'next/image'
import Link from "next/link"


export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Link href='/login' className="w-50 border border-white p-5 rounded-lg">Login</Link>
    </main>
  );
}
