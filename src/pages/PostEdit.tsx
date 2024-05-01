"use client";

import Section from "../components/Section";
import { CopilotTextarea } from "@copilotkit/react-textarea";
import { Authenticated, useGo, useShow } from "@refinedev/core";
import { useContext, useEffect, useMemo, useState } from "react";
import LoadingPage from "../components/Loading";
import NoAuthPage from "../components/NoAuth";
import { NavLink } from "react-router-dom";
import { SupabaseProviderContext } from "../App";
import supabase from "../utility/supabase";

export const ToggleForPreview = ({
  onChange,
}: {
  onChange: (e: Event) => void;
}) => {
  return (
    <label
      htmlFor="MarkdownPreviewToggle"
      className="select-none inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-100"
    >
      <input
        onChange={onChange as any}
        id="MarkdownPreviewToggle"
        type="checkbox"
        className="hidden peer"
      />
      <span className="tracking-widest px-4 py-2 rounded-l-md bg-primary peer-checked:bg-gray-700/80">
        Edit
      </span>
      <span className="tracking-widest px-4 py-2 rounded-r-md bg-gray-700/80 peer-checked:bg-primary">
        Show
      </span>
    </label>
  );
};

export default function EditPost() {
  const [userTypedContent, setUserTypedContent] = useState(
    "# Unable to fetch data!"
  );
  const [activeTab, setActiveTab] = useState<"EDIT" | "SHOW">("EDIT");

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

  const result = useShow();
  const go = useGo();
  const { setLoading } = useContext(SupabaseProviderContext);

  const {
    queryResult: { data, isLoading },
  } = result;

  useEffect(() => {
    if (!data?.data && !isLoading) {
      go({
        to: "/dashboard",
      });
    } else {
      setUserTypedContent(
        data?.data?.content.toString() ?? "# Fetching Content..."
      );
    }
  }, [data, go, isLoading]);

  const userTextConvertedToMarkdown = useMemo(() => {
    return userTypedContent;
  }, [userTypedContent]);

  const SaveThisPost = async () => {
    console.log("hi");
    setLoading!(true);
    try {
      // const { data, error } = await supabase
      //   .from("posts")
      //   .update({
      //     content: userTypedContent
      //   })
      //   .select("*");
      // console.log(12222, data, error);
    } catch (e) {
      console.log("error", e);
    } finally {
      setLoading!(false);
    }
  };

  return (
    <Authenticated
      key="edit_post"
      fallback={<NoAuthPage />}
      loading={<LoadingPage message="Checking credentials..." />}
    >
      <Section title="Edit Post">
        {/* tabs toggle  */}
        <div className="w-full mb-10 grid place-items-center">
          <ToggleForPreview onChange={switchTab} />
        </div>

        {/* tabs  */}
        {activeTab == "EDIT" ? (
          <section>
            <CopilotTextarea
              className="bg-gray/5 min-h-[60vh] text-left rounded-xl focus:outline-none outline-none text-sm py-5 px-4"
              value={userTypedContent}
              onValueChange={(value: string) =>
                setUserTypedContent(value.trim())
              }
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
            {userTextConvertedToMarkdown.trim()}
          </section>
        )}
        <div>
          <button
            onClick={SaveThisPost}
            className="primary_btn w-[60%] block mx-auto my-10"
          >
            Save This Post
          </button>
          <button
            onClick={() =>
              (window.location.href = window.location.href.replace(
                "edit",
                "publish"
              ))
            }
            className="primary_btn w-[60%] block mx-auto my-10"
          >
            Publish This Post
          </button>
        </div>
      </Section>
    </Authenticated>
  );
}
