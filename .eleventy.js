// const yaml = require("js-yaml");
// const aml = require("archieml");
const hljs = require('highlight.js/lib/common');


module.exports = function(eleventyConfig) {

  // const markdownIt = require("markdown-it");
  // const syntaxHighlight = require("markdown-it-highlightjs");
  // const options = {
  //   html: true
  // };
  // const markdownLib = markdownIt(options).use(syntaxHighlight,hljs);

  // eleventyConfig.setLibrary("md", markdownLib);

  // Add a filter using the Config API

  eleventyConfig.addPassthroughCopy("input/js");
  eleventyConfig.addPassthroughCopy("input/assets/fonts");

  // eleventyConfig.addFilter( "myFilter", function() {});

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
