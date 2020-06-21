module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/config.scss";`
        }
      }
    }
  };