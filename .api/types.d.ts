
declare module "@api/handler" {
    import { ServerHandler } from "vite-plugin-api-routes/model";
    export const handler: ServerHandler;
}

declare module "@api/routers" {
    import { ApplyRouters, RouteInfo } from "vite-plugin-api-routes/model";
    export const routeBase: string;
    export const routers: RouteInfo[];
    export const endpoints: string[];
    export const applyRouters: ApplyRouters;
}

declare module "@api/configure" {
    export { 
      ViteServerHook,
      ServerHook,
      HandlerHook,
      CallbackHook,
      StatusHook,
    } from "vite-plugin-api-routes/model";
}    
