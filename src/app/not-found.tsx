import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <h2 className="mt-4 text-3xl font-bold text-white">
                Page Not Found</h2>
            <p className="mt-3 text-center text-gray-500">
                Sorry, the page you are looking for does not exist.</p>
            <Link
                href="/homes"
                className="mt-6 rounded-lg bg-[#C2F800] px-6 py-3 font-medium text-black "
            >Go Back Home
            </Link>

        </div>
    );
};

export default NotFound;