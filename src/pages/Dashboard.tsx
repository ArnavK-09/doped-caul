import PageSection from "../components/Section";
import { CopilotTextarea } from "@copilotkit/react-textarea";
import { useState } from "react";

export function SomeReactComponent() {
  const [text, setText] = useState("");

  return (
    <>
      <CopilotTextarea
        className="px-4 py-4"
        value={text}
        onValueChange={(value: string) => setText(value)}
        placeholder="What are your plans for your vacation?"
        autosuggestionsConfig={{
          textareaPurpose:
            "Travel notes from the user's previous vacations. Likely written in a colloquial style, but adjust as needed.",
          chatApiConfigs: {
            suggestionsApiConfig: {
              forwardedParams: {
                max_tokens: 20,
                stop: [".", "?", "!"],
              },
            },
          },
        }}
      />
    </>
  );
}

export default function () {
  return (
    <PageSection title="Dashboard">
      <div className="grid grid-cols-1 place-items-center gap-14">
        {[1, 2].map(() => (
                          <a href="/dashboard/post/edit" aria-label="Post" className="hover:scale-98 transition-all ease-in-out h-64 relative w-[80%] grid grid-cols-3 bg-gray-100/3 rounded-xl">
            <div
              style={{
                background: "url(https://picsum.photos/1280/640)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="relative h-full w-full col-span-1 rounded-l-xl"
            ></div>
            <div className="grid w-full place-items-start place-items-center pl-2 pr-4 col-span-2">
              <div className="w-full">
                <h3 className="text-xl mb-5 font-bold tracking-wide">
                  Post title
                </h3>
                <p className=" block mx-auto opacity-80 text-sm w-[80%] line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus est possimus maxime provident earum maiores nemo
                  perspiciatis labore sapiente, voluptatibus natus? Officiis
                  ratione, ipsum magni vitae necessitatibus molestiae voluptate
                  animi!
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </PageSection>
  );
}
