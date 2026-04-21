import Link from "next/link";

export default function TopLinks({
  text,
}: {
  text: string;
}) {
    return (
        <>
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link className="hover:text-green-600 transition" href="/">
            Home
            </Link>
            <span>/</span>
            <span
            className= "text-gray-900 font-medium "
            >
            {text}
            </span>

        </nav>
        </>
    );
}