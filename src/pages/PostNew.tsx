import Section from "../components/Section";
import { CopilotTextarea } from "@copilotkit/react-textarea";
import { Authenticated } from "@refinedev/core";
import { useContext, useMemo, useState } from "react";
import LoadingPage from "../components/Loading";
import { ToggleForPreview } from "./PostEdit";
import NoAuthPage from "../components/NoAuth";
import { SupabaseProviderContext } from "../App";
import supabase from "../utility/supabase";
import { CopilotTask, useCopilotContext } from "@copilotkit/react-core";

export default function NewPost() {
  const [userTypedContent, setUserTypedContent] = useState("# Hello, World!");
  const [newPostTitle, setnewPostTitle] = useState("Post newone");
  const [activeTab, setActiveTab] = useState<"EDIT" | "SHOW">("EDIT");
  const { setLoading } = useContext(SupabaseProviderContext);

  const generatePostTitleTask = new CopilotTask({
    instructions: `Generate an attractive, crisp and precise title for the post content written below to maximize user's click rate! Just give title in single line and nothing. Post Content.:-\n${userTypedContent}`,
    actions: [
      {
        name: "Gives post a title",
        handler: (args) => {
          console.log("ARGS:-", args);
        },
      },
    ],
  });

  const context = useCopilotContext();

  const switchTab = (e: Event) => {
    const toggleSwitch = e.target as HTMLInputElement;
    if (!toggleSwitch) return;
    const showPreview = toggleSwitch.checked;
    if (showPreview) {
      setActiveTab("SHOW");
    } else {
      setActiveTab("EDIT");
    }
  };
  const genTitle = async () => {
    setLoading!(true);
    try {
      await generatePostTitleTask.run(context);
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading!(false);
    }
  };

  const SaveThisPost = async () => {
    setLoading!(true);
    try {
      const { data, error } = await supabase
        .from("posts")
        .insert({
          content: userTypedContent,
          published_to: [],
        })
        .select("*");
      console.log(12222, data, error);
    } catch (e) {
      console.log("error", e);
    } finally {
      setLoading!(false);
    }
  };

  const userTextConvertedToMarkdown = useMemo(() => {
    return userTypedContent;
  }, [userTypedContent]);

  return (
    <Authenticated
      key="new_post"
      fallback={<NoAuthPage />}
      loading={<LoadingPage />}
    >
      <Section title="New Post">
        {/* tabs toggle  */}
        <div className="w-full mb-10 grid place-items-center">
          <ToggleForPreview onChange={switchTab} />
        </div>

        {/* title  */}
        <div className="grid grid-cols-5 my-10">
          <input
            value={newPostTitle}
            onInput={(e) => setnewPostTitle(e.currentTarget.value)}
            placeholder="Enter title for post..."
            className="col-span-4 bg-gray/10 px-2 py-1.5 text-md w-full outline-none"
          />
          <button
            onClick={genTitle}
            className="col-span-1 w-full scale-90 primary_btn text-sm"
          >
            GEN
          </button>
        </div>

        {/* tabs  */}
        {activeTab == "EDIT" ? (
          <section>
            <CopilotTextarea
              className="bg-gray/5 min-h-[60vh] text-left rounded-xl focus:outline-none outline-none text-sm py-5 px-4"
              value={userTypedContent}
              onValueChange={(value: string) => setUserTypedContent(value)}
              placeholder="Get started writing your content powered by AI..."
              autosuggestionsConfig={{
                textareaPurpose: "markdown editor",
                chatApiConfigs: {
                  suggestionsApiConfig: {
                    forwardedParams: {
                      max_tokens: 20,
                      stop: [".", "?", "!", "#"],
                    },
                  },
                },
              }}
            />
          </section>
        ) : (
          <section className="preview_md">
            {userTextConvertedToMarkdown}
          </section>
        )}

        <div>
          <button
            onClick={SaveThisPost}
            className="primary_btn w-[60%] block mx-auto my-10"
          >
            Save This Post
          </button>
        </div>
      </Section>
    </Authenticated>
  );
}
