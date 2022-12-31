import GhostContentAPI from "@tryghost/content-api";

const cmsAPI = new GhostContentAPI({
  url: process.env.CMS_URL,
  key: process.env.CMS_KEY,
  version: "v5.0",
});

export const getAllPost = async () => {
  return cmsAPI.posts.browse({
    limit: "all",
  });
};
