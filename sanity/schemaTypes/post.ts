export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title" },
    },
    {
      name: "content",
      type: "text",
      title: "Content",
    },
    {
      name: "image",
      type: "image",
      title: "Featured Image",
    },
  ],
}