import * as React from "react";
import "../index.css";
import { GetPath, Template, TemplateProps, TemplateRenderProps, TemplateConfig, GetHeadConfig,
  HeadConfig} from "@yext/pages";
import { SearchHeadlessProvider, useSearchActions } from "@yext/search-headless-react";
import PageLayout from "../components/layouts/PageLayout";
import SearchLayout from "../components/locatorPage/SearchLayout";
import {  AnswerExperienceConfig  } from "../config/globalConfig";


var currentUrl = "";
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: "Hema",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "This is Hema Locator-Location Page"
        },
      },

      {
        type: "meta",
        attributes: {
          name: "title",
          content: "Hema"
        },
      },
      {
        type: "meta",
        attributes: {
          name: "author",
          content: "Hema",
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          // href: stagingBaseUrl + "index.html",
        },
      },
      // og tags

      {
        type: "meta",
        attributes: {
          property: "og:url",
          // content: stagingBaseUrl + currentUrl,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: "This is Hema locator-location page",
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: "Hema",
        },
      },
      // {
      //   type: "meta",
      //   attributes: {
      //     property: "og:image",

      //     // content: favicon,
      //   },
      // },
      // /// twitter tag

      // {
      //   type: "meta",
      //   attributes: {
      //     name: "twitter:card",
      //     content: "summary",
      //   },
      // },
      // {
      //   type: "meta",
      //   attributes: {
      //     name: "twitter:url",
      //     content: "index.html"
      //   },
      // },

      // {
      //   type: "meta",
      //   attributes: {
      //     name: "twitter:description",
      //     content: "Dreams",
      //   },
      // },

      // {
      //   type: "meta",
      //   attributes: {
      //     name: "twitter:image",
      //     // content: favicon,
      //   },
      // },
    ],
  };
};


export const getPath: GetPath<TemplateProps> = () => {
  return `/locatorSearch`;
};

/*
export const config: TemplateConfig = {
  stream: {
    $id: "locatorSearch",
    localization: {
      locales: ["en"],
      primary: false,
    },
    filter: {},
    fields: []
  },
};
*/
// export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({relativePrefixToRoot, path, document}): HeadConfig => {
//   return {
//     title: document.name,
//     charset: "UTF-8",
//     viewport: "width=device-width, initial-scale=1",
//     tags: [
//       {
//         type: "meta",
//         attributes: {
//           description: document.description,
//         },
//       },
//     ],
//   };
// };

const locatorSearch: Template<TemplateRenderProps> = ({relativePrefixToRoot, path, document}) => {

const { _site } = document;

const providerOptions: google.maps.MapOptions = {
  disableDefaultUI: true
}

return (
    <>
      <PageLayout>
        <SearchHeadlessProvider
            experienceKey={AnswerExperienceConfig.experienceKey}
            locale={AnswerExperienceConfig.locale}
            apiKey={AnswerExperienceConfig.apiKey}               
            verticalKey={AnswerExperienceConfig.verticalKey}
            experienceVersion={AnswerExperienceConfig.experienceVersion}
            sessionTrackingEnabled={AnswerExperienceConfig.sessionTrackingEnabled}  
            endpoints={AnswerExperienceConfig.endpoints}         
        >
           <SearchLayout/>           
        </SearchHeadlessProvider>   
      </PageLayout>
    </>
  );
};

export default locatorSearch;
