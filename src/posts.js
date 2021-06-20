import _ from 'lodash'
import all from '../posts/*.md'

export const posts = _.chain(all)
  .map(transform)
  .orderBy('date', 'desc')
  .value()

export function findPost(permalink) {
  return _.find(posts, {permalink})
}

export function findByTag(tag) {
  return posts.filter(post => post.tags.includes(tag))
}


export function getAlltags(){
  let allTags = [];
  posts.map((post) => {
    post.tags.forEach((tag) => {
      if (!allTags.includes(tag.trim())) {
        allTags.push(tag.trim());
      }
    });
  });

  return allTags;
}

export function findAllTag() {
  let tagSet = new Set();
  posts.map((post) => {
    if (post.tags){
      let data = Object.values(post.tags).toLocaleString().split(",");
      // console.log('type of Data : ', typeof(data));
      data.forEach( (el)=> {
        return tagSet.add(el);
      });
    }
  });
  return Array.from(tagSet);
}


function transform({filename, metadata, html}) {
  const permalink = metadata.permalink || filename.replace(/.md$/, '')
  const date = new Date(metadata.date)
  let tags = []

  if (metadata.tags) {
    tags = metadata.tags.split(',').map(str => str.trim())
  }

  return {...metadata, filename, permalink, html, date, tags}
}
