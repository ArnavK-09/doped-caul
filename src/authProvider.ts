import { AuthProvider } from "@refinedev/core";
import supabase from "./utility/supabase";

// @ts-expect-error We don not want all properties
const authProvider: AuthProvider = {
  getIdentity: async () => {
    const res = await supabase.auth.getUser();
    return res.data.user;
  },
  check: async () => {
    const user = await supabase.auth.getUser();
    return {
      authenticated: user.data.user?.aud.toLowerCase() == "authenticated",
    };
  },
  login: async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) {
      return {
        success: false,
        error,
      };
    }
    if (data) {
      return {
        success: true,
        redirectTo: "/",
      };
    }

    return {
      success: false,
      error: {
        message: "Login failed",
        name: "Login Failed",
      },
    };
  },
};

export default authProvider;
