// const yaml = require("js-yaml");
// const aml = require("archieml");
// const marked = require('marked');


module.exports = function(eleventyConfig) {
  // Add a filter using the Config API

  eleventyConfig.addPassthroughCopy("input/js");
  eleventyConfig.addPassthroughCopy("input/assets/fonts");
  // eleventyConfig.addPassthroughCopy("input/tutorials");

  // eleventyConfig.addFilter( "myFilter", function() {});
  // eleventyConfig.setTemplateFormats("html","css","ttf","njk","md");
  eleventyConfig.setTemplateFormats("html,css,ttf,njk,md");
  // eleventyConfig.addNunjucksFilter( "findwhere", function(value,data,key) {
  //   return data.find(a=>a[key]==value);
  // });

  // You can return your Config object (optional).
  return {
    dir: {
      input: "input",
      output: "_site"
    }
  };
};
