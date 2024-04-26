// ...

import { AuthProvider } from "@refinedev/core";
import supabase from "./utility/supabase";

const authProvider: AuthProvider = {
    getIdentity: async () => {
        const res = await supabase.auth.getUser();
        return res.data.user;
    },
    login: async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github"
      })
  
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

  export default authProvider