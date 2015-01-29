"use strict";

/**
 * Setting globals to use for all Gulp tasks
 */
global.APP_FOLDER = "app";
global.RELEASE_FOLDER = "dist";
global.SERVE_FOLDER = "serve";
global.ASSETS_FOLDER = "assets";
global.REPORTS = "reports";
global.LIB = "lib";

global.config = {
  paths: {
    index: "/index.html",
    sass: APP_FOLDER + "/sass/app.scss",
    styles: SERVE_FOLDER + "/" + ASSETS_FOLDER + "/css",
    scripts: SERVE_FOLDER + "/" + ASSETS_FOLDER + "/js"
  },
  ports: {
    staticServer: 8000,
    livereloadServer: 35729
  }
};
