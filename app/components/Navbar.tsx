import Image from "next/image";
import Link from "next/link";
import { auth } from "../auth";
import { signInWithGithub } from "../actions/signInGithub";
import { signOutAction } from "../actions/signOutAction";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="w-full bg-white shadow-md p-4">
      <nav className="w-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <Image src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>
        <div className="flex place-items-center gap-5">
          {session?.user ? (
            <>
              <Link href="/startup/create"><span className="text-black">CREATE</span></Link>
              <form action={signOutAction}>
  <button type="submit">
    <span className="text-black">LogOut</span>
  </button>
</form>
              <Link href={`/user/${session.user.id}`}>
                <span className="text-black">{session.user.name}</span>
              </Link>
            </>
          ) : (
            <form action={signInWithGithub}>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Login with GitHub
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;