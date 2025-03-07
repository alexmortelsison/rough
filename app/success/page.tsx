import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-green-600">
        Payment Successful! 🎉
      </h1>
      <p className="mt-4 text-gray-700">Thank you for your purchase.</p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md"
      >
        Go Back to Home
      </Link>
    </main>
  );
}
