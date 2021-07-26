/* eslint-disable semi */
/* eslint-disable linebreak-style */
/**
 * this file is use to define the layout, menu setttings and urls setup for your wordpress urls.
 * just write wordpress subdomain handles here, like your wordpress.com website url is :
 * n1demo.wordpress.com, hence handle/subdomain  will be n1demo.
 */

export const wpHandle = '1ninjatutorials';
export const metaTitle = 'Web design ninjas';
// not more than 150 characters;
export const metaDescription = 'Learnign to explore svelte and sapper technologies';

export const urls = {
  POST: `https://public-api.wordpress.com/rest/v1.1/sites/${wpHandle}.wordpress.com/posts/`,
  PAGES: `https://public-api.wordpress.com/rest/v1.1/sites/${wpHandle}.wordpress.com/pages/`,
  CATEGORIES: `https://public-api.wordpress.com/rest/v1.1/sites/${wpHandle}.wordpress.com/categories/`,
  TAGS: `https://public-api.wordpress.com/rest/v1.1/sites/${wpHandle}.wordpress.com/tags/`,
  POSTPERPAGE: 6,
  blogLayout:'',         // options includes grid, mansoori, timeline
  homePagelayout: '',
  gridCol: 2,           // options 1,2,3,4
  primaryColor: '',
  secondaryColor:'',
  bgPrimaryColor:'',
  bgSecondaryColor:'',
  primaryActiveColor:'',
  headingFontFamily:'',
  paraFontFamily:'',
  socialmediaurls: {
    facebook: '',
    instgram: '',
    twitter:'',
    linkedin:'',
    skype:'',
  },
  copyright: '© 2021 | All right reserved'
}