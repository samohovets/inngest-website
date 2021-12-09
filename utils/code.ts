import remarkShikiTwoslash from 'remark-shiki-twoslash';

// Usage:
//
// serialize(content, {
//   mdxOptions: {
//     remarkPlugins: [highlight],
//   },
// });
export const highlight = [remarkShikiTwoslash, { theme: "dark-plus" }]
