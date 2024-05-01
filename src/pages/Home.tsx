import HeroSection from "../components/Hero";
import Secion from "../components/Section";

export default function HomePage() {
  const FEATURES: Array<{ title: string; description?: string }> = [
    {
      title: "AI-Driven",
      description:
        "Harnessing cutting-edge AI technology for unparalleled writing assistance.",
    },
    {
      title: "Persona Customization",
      description:
        "Tailor the writing style to your unique voice and desired impact.",
    },
    {
      title: "Multi-Platform Publishing",
      description:
        "Seamlessly distribute your content across various platforms with a single click.",
    },
    {
      title: "Context-Aware Intelligence",
      description:
        "Our AI comprehends and adapts to the contextual nuances of your work.",
    },
    {
      title: "Advanced Markdown Support",
      description:
        "Leverage the full power of GitHub Flavored Markdown for rich content creation.",
    },
    {
      title: "Completely Free",
      description:
        "Enjoy our open-source platform without any fees or hidden costs.",
    },
  ];

  return (
    <>
      <HeroSection />
      <Secion title="Damn the Features!">
        <div className="grid px-4 gap-x-7 gap-y-10 md:px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-18">
          {[...FEATURES].map((X) => (
            <div className="select-none cursor-pointer hover:rotate-[2deg] hover:scale-102 hover:brightness-125 ease-in-out transition-all rounded-3xl bg-gradient-to-br from-neutral-9/60 to-black/40 hover:to-neutral-9/40 hover:from-black/40 p-5 sm:p-6 lg:p-8 relative overflow-hidden">
              <span className="absolute w-40 aspect-square -top-16 -left-16 bg-gradient-to-br from-secondary/60 to-secondary group-hover:to-secondary/60 group-hover:from-secondary rounded-full"></span>
              <div className="my-6 space-y-3 relative grid place-items-center w-full h-full">
                <div className="block m-auto">
                  <h4 className="text-lg md:text-2xl text-neutral-1 font-semibold">
                    {X.title}
                  </h4>
                  {X.description && (
                    <p className="text-neutral-3 mt-3 text-sm">
                      {X.description}
                    </p>
                  )}
                </div>
              </div>
              <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-gradient-to-tl group-hover:to-primary/66 group-hover:from-primary/88 from-primary/66 to-primary/88 rounded-full"></span>
            </div>
          ))}
        </div>
      </Secion>
    </>
  );
}
