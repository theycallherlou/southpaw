import { LogLevel, Configuration } from "@azure/msal-browser";

const azClientId: string = import.meta.env.REACT_APP_CLIENT_ID as string;
const azTenantId: string = import.meta.env.REACT_APP_TENANT_ID as string;
const azRedirectUri: string = import.meta.env.REACT_APP_REDIRECT_URI as string;
// microsoft authentication library configuration 
export const authConfig: Configuration = {
  auth: {
    clientId: azClientId,
    authority: azTenantId,
    redirectUri: azRedirectUri
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      // do not publish personal identification information
      loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
        if (containsPii) {
          return;
        }
        // set the appropriate logging level based on the level context 
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            break;
          case LogLevel.Info:
            console.info(message);
            break;
          case LogLevel.Verbose:
            console.debug(message);
            break;
          case LogLevel.Warning:
            console.warn(message);
            break;
          default:
            break;
        }
      },
    },
  },
};

// set the permission to read the user on the login request
export const loginRequest = {
  scopes: ["User.Read"]
};

// set the graph url endpoint based on what information is needed
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
