import { getCollection } from 'astro:content';

export const getPublishedPosts = () =>
  getCollection('posts', ({ data }) => !data.draft);
