# intro

## why?

i created this project just for the sake of particpating in quest, and why im writing this article? just because for the sake of partipation nothing else! but surely this article woould be well written.

## what am building?

i built a platform where techinical writers can write their post efficiently with the help of ai, which can help to automaticcaly enhance and complete your article. you can also publish your article directly from platform without any hassle. een the ui is soo good and fully safe and secure environment just with github oauth login.

# how it works?

basically my frontend created using react, refine, copilotkit/react etc.. sends request to backend (initiated by `<CopilotTextarea />), the backend streams ai (here gpt-3.5 by openai) which is then appended to user's blog / post with their on will. the copilotkit keeps care to also send all context for app, beautiful prompt and other things to get out best results! all this makes this app powerfull which provides content according to needs!

```scala
Post Context -> CopilotTextarea -> Backend -> Stream Response -> Shown on Frontend -> Accepted by Writer
```

# starting up project

## name

i know name is super wierd "doped-caul", welll well it doesnt really matches project aim but i was unable to find name so this name is suggested by my discord friends (rohan and komsenapati). thanks lol!

## ui

well i chose unocss because tero (creator of nuejs) article convicned me to use unocss instead of unocss , i really followed him blindly, and i love it. unocss is much comfortable and would use for future projects.

## color scheme

i really have 0 knowledge about color scheme so i choose tiktok color scheme suggested by and [article](https://designshack.net/articles/trends/best-website-color-schemes/) thanks!

## framework

i always wanted to give a try to [refine](https://refine.dev) but never got a chance. but today i created finally and i really love their ecosystem! its really and awesome and makes developmen faster by provided all sources for auth, db...etc!


# prompt 

I just randomly wrote inefficient prompt for llm but you can change prompt with your choice in ` src/utilities/prompt.ts`

## react??? huh

i was really forced to use react because i chose refine frame work and have to use [copilot kit](https//copilotkit.ai) as it was base for the quest challenge! otherwise i really dont use react and im bad in it!

# backend

i really created just a simple api with express.js for providing interface to contact with openai with api key! i initialyy choose `@copilotkit/backend` but it isnt working well so i just use this snippet of code to stream responses

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

since copilotkit sends post request with all data to gather response you have to add post req in your backend!

# main app (Frontend)

## ui

i just created whole damn ui by myself no external components just for fully customization using tiktok color scheme! i hope you would like it!
instead of being using black bg i used a pattern from a site that really adds some beauty to site.

## font

i just found randomly and started using. initialyy the font i was trying to use was not good for ux, but im sure that present font is nice

## coding stuff

### auth/db

i use supabase auth with github provider, which really was so cool. i created `post` table with some fields for saving users data. and refine.dev's supabase provider was cherry on cake which really saved lots of time configuring db and auth by providing valuable helpers

### copilot kit

i integrated copilot kit by taking guidance from their demo projects and little bit of docs. their react-supported packages really helped me to successfully conenct by frontend to backend and mae the best use of ai models! thanks

### how posts publish?

currently we can use dev.to, medium.com, hashnode.com etc... provides their api to publish article
all api keys are safe and done on client side(idk why but yes). our db doesnt store any of yours api key used for publishing! i used platform's api to publish ai written articles powered by copilotkit!

### markdown

i used [marked](https://www.npmjs.com/package/marked) package and react memo to convert ai-written article from markdown to html for preview in real time

```typescript
const userTextConvertedToMarkdown = useMemo(() => {
  return marked(userTypedContent);
}, [userTypedContent]);
```

### variables

currently this app requires some env variables to work nicely, so you have to add it to make working,

```bash
VITE_SECRET="<your secret word(s) to encode secret data>"
VITE_SUPABASE_URL="<your supabase project url>"
VITE_SUPABASE_KEY="<your supabase project key?"
OPENAI_KEY="<your openai api key>"
```

beside this you have to also configure your frontend origin in backend to stop freaking cors erros:

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

and also provide your backend url to copilotkit provider to communicate, you can use `runtimeUrl` since `url` is depreciated in new copilotkit's version!

```html
<CopilotKit
  url="https://6969-arnavk09-post-4nxaq7973mi.ws-us112.gitpod.io/"
  runtimeUrl="https://6969-arnavk09-post-4nxaq7973mi.ws-us112.gitpod.io/"
>
  ....
</CopilotKit>
```

### dependencies

im using latest versions of dependencies for copilot kit as previos versions giving errors

```json
"@copilotkit/react-core": "^0.25.0",
"@copilotkit/react-textarea": "^0.35.0",
```

# conclusion

thanks if you read! this was my first try to write article just for the sake of quest, tho i know its not written nicely and lot's of things are missing. this quest really took a time and my other projects were pause so i decided to not to give much time anymore (10 days done already), and now i completed project, it might have some bugs, but would surely fix in future.
i would really appreciate if you star and give vote to my repo/project and also react to this post!
thanks everybody! it might not be a good project but i tried hard and gave it all

# links
