import Section from "../components/Section";

export default function PublishPost() {
  return (
    <Section title="Publish Your Post">
      <h3 className="text-xs opacity-95 mb-10">
        Post ID:- 27eae91c-cbce-415c-a4a0-784f4b617593
      </h3>

      <div className="h-full max-w-[65vw] block mx-auto">
        <h4 className="glitch_text text-xl text-white font-bold tracking-wider text-center">
          Choose Platforms to publish:-
        </h4>
        <div className="my-6">
          <input
            type="checkbox"
            id="opt"
            value=""
            className="hidden peer"
            required
          />
          <label
            htmlFor="opt"
            className="select-none inline-flex items-center justify-between w-full p-5 text-gray-500 bg-black/50 border-2 border-primary rounded-xl cursor-pointer hover:bg-black/80  peer-checked:border-4 peer-checked:border-primary hover:text-gray-600  peer-checked:text-gray-600 peer-chcecked:[label>img]:!border-4 peer-unchecked:[&,img]:!border-4"
          >
            <div className="px-4 gap-4 break-words overflow-x-hidden grid md:grid-cols-3 grid-cols-1 w-full">
              <div className="col-span-1">
                <img
                  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8j7kvp660rqzt99zui8e.png"
                  alt="dev.to"
                  draggable={false}
                  className="border-2 border-primary h-auto rounded-2xl"
                />
              </div>
              <div className="col-span-2 h-full w-full grid place-items-center">
                <h2
                  style={{
                    mixBlendMode: "difference",
                  }}
                  className="font-bold tracking-wide text-2xl md:text-3xl text-primary"
                >
                  Dev.to
                </h2>
              </div>
            </div>
          </label>
        </div>
      </div>
    </Section>
  );
}
