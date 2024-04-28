import Section from "../components/Section";
import { CopilotTextarea } from "@copilotkit/react-textarea";
import { useGo, useShow } from "@refinedev/core";
import { useState } from "react";
import LoadingPage from "../components/Loading";

export const ToggleForPreview = ({ onChange }: { onChange: (e: Event) => void }) => {
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
  const [userTypedContent, setUserTypedContent] = useState("# Hello, World!");
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

  const {
    queryResult: { data, isLoading },
  } = result;

  if (isLoading) return <LoadingPage />;

  if (!data?.data) {
    go({
      to: {
        resource: "posts",
        action: "list",
      },
    });
  }

  return (
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
          preview
        </section>
      )}
    </Section>
  );
}
