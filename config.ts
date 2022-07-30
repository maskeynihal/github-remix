export default {
  api: {
    github: {
      base: "https://api.github.com",
      accessToken: process.env.GH_PERSONAL_ACCESS_TOKEN,
      search: {
        repos: "/search/repositories",
      },
    },
  },
};
