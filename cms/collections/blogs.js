import { PermalinkField } from '../fields/permalink-field';
import seo from '../fields/seo';
import { ID, ImageField, backgroundImageField } from '../fields';

const collection = {
  name: 'blog',
  label: 'Blogs',
  editor: {
    preview: true,
  },
  description: 'Blog posts collection',
  folder: 'content/blog',
  slug: '{{slug}}',
  summary:
    "{{title}} \r\n {{date | date('YYYY-MM-DD')}} \r\n {{body | truncate(70, '...')}}",
  create: true,
  fields: [
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'post',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'post',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
    },
    PermalinkField('blog'),
    ImageField(),
    backgroundImageField(),
    {
      label: 'Date',
      name: 'date',
      widget: 'datetime',
      default: '',
      required: false,
    },
    {
      label: 'Author',
      name: 'author',
      widget: 'relation',
      collection: 'authors',
      default: '',
      search_fields: ['title'],
      display_fields: ['title'],
      value_field: 'id',
      required: false,
    },
    {
      label: 'Excerpt',
      name: 'excerpt',
      widget: 'markdown',
      default: '',
      required: false,
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      default: '',
      required: false,
    },
    seo,
  ],
};

export default collection;
