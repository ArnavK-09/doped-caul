export default function Hero() {
  return (
    <>
      <section className="h-screen grid place-items-center px-4">
        <h1 className="uppercase text-center leading-[1]">
          <span
            style={{
              textShadow: `0.05em 0 0 #000, -0.03em -0.04em 0 #fff , 0.025em 0.04em 0 #fff`,
            }}
            className="text-transparent text-8xl font-bold tracking-tight"
          >
            markdown
          </span>
          <br></br>
          <span
            style={{
              textShadow: `0.05em 0 0 #fff, -0.03em -0.04em 0 #DD1D38 , 0.025em 0.04em 0 #00E1DB`,
            }}
            className="font-extrabold text-[9rem] tracking-wider"
          >
            copilot ai
          </span>
          <br></br>
          <span style={{
            textShadow:`-4px 4px 0 #fff , 4px 4px 0 #fff, 4px -4px 0 #fff, -4px -4px 0 #fff`
          }} className="text-9xl text-transparent tracking-tight font-bold">post</span>
        </h1>
      </section>
    </>
  );
}
