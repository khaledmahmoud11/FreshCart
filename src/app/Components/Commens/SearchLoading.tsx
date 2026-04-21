import { Spinner } from "@/components/ui/spinner";

export default function SearchLoading() {
    return (
        <div className=" *:flex *:flex-col *:items-center *:justify-center *:gap-2 py-20">
        <div className="text-center">
            <Spinner className="size-10 text-green-600" />
            <p className="text-gray-500">Searching products...</p>
        </div>
        </div>
    );
}