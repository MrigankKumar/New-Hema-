export const limit = 10; 

export const radius = 50;

export const defaultQuery = "";

export const baseApiUrl = "https://liveapi-sandbox.yext.com/v2/accounts/me";

export const liveAPIKey = "a4a2b496b22aeb70e22826c7a579073c";

export const googleMapsApiKey = "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18";

export const savedFilterId = "";

export const entityTypes = "locations";

export const googleMapsConfig =  {
    centerLatitude: 41.9110711,
    centerLongitude:-87.653912,
    googleMapsApiKey: "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18"   
};

export const AnswerExperienceConfig =  {
    experienceKey: "hema-as",
    locale:"en",
    apiKey: "a4a2b496b22aeb70e22826c7a579073c",
    verticalKey: "locations",
    experienceVersion: "STAGING",
    sessionTrackingEnabled: true,
    endpoints:{
        universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
        verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
        questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
        universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
        verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
        filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch"
    }
};
