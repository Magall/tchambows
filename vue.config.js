module.exports = {
    publicPath:'/tchambows/',
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/config.scss";`
        }
      }
    }
  };