
// Imports
import * as _0_0 from "@api/root/src/api/copilot.ts";
import * as configure from "@api/configure";

export const routeBase = "/api";

const internal  = [
  _0_0.default && {
        source     : "src/api/copilot.ts?fn=default",
        method     : "use",
        route      : "/copilot",
        path       : "/api/copilot",
        url        : "/api/copilot",
        cb         : _0_0.default,
      },
  _0_0.GET && {
        source     : "src/api/copilot.ts?fn=GET",
        method     : "get",
        route      : "/copilot",
        path       : "/api/copilot",
        url        : "/api/copilot",
        cb         : _0_0.GET,
      },
  _0_0.PUT && {
        source     : "src/api/copilot.ts?fn=PUT",
        method     : "put",
        route      : "/copilot",
        path       : "/api/copilot",
        url        : "/api/copilot",
        cb         : _0_0.PUT,
      },
  _0_0.POST && {
        source     : "src/api/copilot.ts?fn=POST",
        method     : "post",
        route      : "/copilot",
        path       : "/api/copilot",
        url        : "/api/copilot",
        cb         : _0_0.POST,
      },
  _0_0.PATCH && {
        source     : "src/api/copilot.ts?fn=PATCH",
        method     : "patch",
        route      : "/copilot",
        path       : "/api/copilot",
        url        : "/api/copilot",
        cb         : _0_0.PATCH,
      },
  _0_0.DELETE && {
        source     : "src/api/copilot.ts?fn=DELETE",
        method     : "delete",
        route      : "/copilot",
        path       : "/api/copilot",
        url        : "/api/copilot",
        cb         : _0_0.DELETE,
      }
].filter(it => it);

export const routers = internal.map((it) => {
  const { method, path, route, url, source } = it;
  return { method, url, path, route, source };
});

export const endpoints = internal.map(
  (it) => it.method?.toUpperCase() + "\t" + it.url
);

export const applyRouters = (applyRouter) => {
  internal.forEach((it) => {
    it.cb = configure.callbackBefore?.(it.cb, it) || it.cb;
    applyRouter(it);
  });
};

