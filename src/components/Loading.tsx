export default function LoadingPage({ message }: { message?: string }) {
  return (
    <section className="select-none grid place-items-center min-h-screen w-screen">
      <div className="text-center align-middle grid place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="white"
          className="w-15 h-15 opacity-88 animate-spin mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        {message && (
          <h2 className="tracking-wide font-semibold break-words max-w-sm text-gray-1 opacity-90">
            {message}
          </h2>
        )}
      </div>
    </section>
  );
}
