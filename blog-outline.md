# 🚀 Introducing "Doped Caul" - AI-Powered Writing Platform for Technical Writers 🖋️

## 💡 Why?

I created this project to participate in the [Quest](https://quine.sh/user/ArnavK-09) challenge, but more importantly, to provide a seamless writing experience for technical writers like yourself. This article aims to showcase the power of AI in enhancing your writing process and delivering high-quality content effortlessly.

## 🔨 What's Being Built?

"Doped Caul" is a cutting-edge platform that combines the expertise of human writers with the capabilities of artificial intelligence. It allows technical writers to create and publish their articles efficiently, with the help of an AI assistant that can automatically enhance and complete your work. The platform boasts a user-friendly interface, a safe and secure environment with GitHub OAuth login, and a streamlined publishing process, eliminating the hassle of managing multiple platforms.

## 🧠 How Does It Work?

At the heart of "Doped Caul" lies a powerful frontend built with React, Refine, CopilotKit/React, and other modern technologies. When you start typing in the `<CopilotTextarea />` component, it sends a request to the backend, which initiates a stream of AI-generated content using GPT-3.5 by OpenAI. This content is then seamlessly appended to your blog post or article, based on your preferences. The CopilotKit takes care of providing the necessary context, crafting beautiful prompts, and ensuring optimal results.

```scala
Post Context -> CopilotTextarea -> Backend -> Stream Response -> Shown on Frontend -> Accepted by Writer
```

## ✨ Getting Started

### 🔖 Name

Admittedly, the name "Doped Caul" might seem a bit peculiar at first, but it was a suggestion from my Discord friends (Rohan and Komsenapati), and I decided to embrace the quirky vibe. After all, a unique name can help us stand out in the crowded tech world! 😄

### 🎨 UI and Color Scheme

For the user interface, I chose [UnoCSS](https://unocss.dev), inspired by Tero (the creator of NueJS) and his compelling article on the benefits of using UnoCSS over traditional CSS frameworks. As for the color scheme, I opted for a vibrant palette inspired by TikTok, following the recommendations from [this article](https://designshack.net/articles/trends/best-website-color-schemes/). The combination of modern UI and eye-catching colors aims to create an engaging and visually appealing experience for our users.

### 🛠️ Framework and Dependencies

- I've always wanted to explore [Refine](https://refine.dev), a powerful framework that streamlines development by providing seamless authentication, database integration, and other essential features. This project was the perfect opportunity to dive into Refine's ecosystem, which has proven to be truly awesome and time-saving.

- To integrate AI capabilities, I relied on [CopilotKit](https://copilotkit.ai), a requirement for the Quest challenge. While I was initially forced to use React due to the choice of Refine and CopilotKit, I've grown to appreciate its strengths despite my initial unfamiliarity with the framework.

- For the backend, I created a simple API with Express.js to interface with the OpenAI API. Initially, I tried using `@copilotkit/backend`, but due to some compatibility issues, I opted for a more straightforward approach:

```typescript
app.post("/", async (req, res) => {
  const stream = openai.beta.chat.completions.stream({
    model: "gpt-3.5-turbo",
    temperature: 0.5,
    messages: req.body.messages,
  });
  res.header("Content-Type", "text/plain");
  for await (const chunk of stream.toReadableStream()) {
    res.write(chunk);
  }
  res.end();
});
```

> Since CopilotKit sends a POST request with all the necessary data to gather the AI response, you'll need to add a corresponding POST request handler in your backend.

### 📝 Main App (Frontend)

#### 🎯 UI and Styling

I designed the entire UI myself, without relying on external components, to ensure full customization and alignment with the TikTok-inspired color scheme. Instead of a plain black background, I incorporated a subtle pattern from a website, adding an extra touch of beauty to the site.

#### 🔤 Font Selection

After some exploration, I settled on a font that strikes a balance between aesthetics and user experience. While my initial choice wasn't optimal for UX, the current font should provide a pleasant reading experience for our users.

#### 💻 Coding Stuff

##### 🔒 Authentication and Database

"Doped Caul" utilizes [Supabase](https://supabase.com) for authentication, with a [GitHub](https://github.com) provider for a seamless login experience. I created a `post` table in the database to store user's post content related data.

Refine.dev's [Supabase provider](https://refine.dev/docs/data/packages/supabase/ made it incredibly easy to configure the database and authentication, saving me a lot of time and effort.

##### 🧠 CopilotKit Integration

I integrated CopilotKit by following their demo projects and documentation. Their React-supported [packages](https://docs.copilotkit.ai/getting-started/quickstart-textarea) greatly facilitated the connection between the frontend and backend, enabling the best use of AI models.

##### 🚀 Publishing Posts

Currently, users can publish their AI-written articles directly to platforms like `dev.to, medium.com, and hashnode.com`, which provide APIs for publishing content. All API keys are securely handled on the client-side, ensuring that our database never stores any sensitive information. I utilized these platforms' APIs to streamline the publishing process for AI-generated content powered by CopilotKit.

##### 📝 Markdown Rendering

To convert the AI-written articles from markdown to HTML for real-time preview, I used the [marked](https://www.npmjs.com/package/marked) package in conjunction with React's `useMemo` hook for optimal performance:

```typescript
const userTextConvertedToMarkdown = useMemo(() => {
  return marked(userTypedContent);
}, [userTypedContent]);
```

Also I used Unocss's [Typography](https://unocss.dev/presets/typography) plugin to preview markdown content beautifully without writing any extra css.

##### 🔑 Environment Variables

To ensure smooth operation, "Doped Caul" requires a few environment variables:

```bash
VITE_SECRET="<your secret word(s) to encode secret data>"
VITE_SUPABASE_URL="<your supabase project url>"
VITE_SUPABASE_KEY="<your supabase project key>"
OPENAI_KEY="<your openai api key>"
```

Additionally, you'll need to configure your frontend origin in the backend to prevent CORS errors:

```typescript
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "<your app url>");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
```

Finally, provide your backend URL to the CopilotKit provider to establish communication:

```html
<CopilotKit
  url="<your copilot backend url>"
  runtimeUrl="<your copilot backend url>"
>
  ....
</CopilotKit>
```

> `url` field is depreciated in newer versions of copilotkit!

##### 📦 Dependencies

I'm using the latest versions of the dependencies for CopilotKit, as previous versions were causing issues:

```json
"@copilotkit/react-core": "^0.25.0",
"@copilotkit/react-textarea": "^0.35.0",
```

# 💝 End of this post

Thank you for taking the time to read this article! While this was my first attempt at writing for the Quest challenge, I recognize that there may be room for improvement. However, I've put in my best efforts to create a project that showcases the power of AI in enhancing the writing experience for technical writers.

- I would greatly appreciate if you could star and vote for my repo/project, as well as react to this post. Your support means a lot and will motivate me to continue improving and delivering even better solutions in the future.

_Remember, "Doped Caul" may not be perfect, but it's a testament to my dedication and hard work (10 days of focused effort!). I'm excited to continue refining this project and addressing any bugs or issues that may arise._

**Thank you, everyone, for your interest and support! 🙌**

# 🔗 Links


todo