export default function Secion({
    children,
    title = "Page",
  }: {
    children?: React.ReactNode;
    title?: string;
  }) {
    return (
      <>
        <section className="space-y-15 min-h-screen block mx-auto px-4 w-[95vw] overflow-x-hidden py-12 text-center">
          <div>
            <h1 className="font-bold glitch_text tracking-wider text-3xl md:text-5xl break-words">
              {title}
            </h1>
          </div>
          <div className="grid place-items-center w-full">
            <div className="w-full">{children}</div>
          </div>
        </section>
      </>
    );
  }
  