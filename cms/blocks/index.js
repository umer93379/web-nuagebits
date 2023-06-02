import { Buttons, Title, Content, VariantField, ImageField, Hero, Heros, backgroundImageField } from '../fields';

import { PermalinkField } from '../fields/permalink-field';

const Config = {
  label: 'Blocks',
  name: 'blocks',
  widget: 'list',
  types: [
    {
      label: 'Hero',
      name: 'hero',
      widget: 'object',
      fields: [
        Title,
        Content,
        Buttons,
        ImageField(),
        backgroundImageField(),
        VariantField('default', ['default', 'centered', 'full']),
      ],
    },
    {
      label: 'Hero Slider',
      name: 'hero_slider',
      widget: 'list',
      fields: [Heros],
    },
    {
      label: 'Content',
      name: 'content',
      widget: 'object',
      fields: [Content, backgroundImageField()],
    },
    {
      label: 'Content with Image',
      name: 'content_image',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Title,
        Content,
        Buttons,
        ImageField(),
        backgroundImageField(),
        VariantField('default', ['default', 'reversed']),
      ],
    },
    {
      label: 'Perks',
      name: 'perks',
      summary: '{{fields.title}}',
      widget: 'object',
      fields: [
        Title,
        Content,
        backgroundImageField(),
        {
          label: 'Columns',
          name: 'columns',
          widget: 'list',
          summary: '{{fields.title}}',
          fields: [
            Title,
            {
              label: 'Show Popup',
              name: 'show_popup',
              widget: 'boolean',
            },
            PermalinkField(),
            Content,
            ImageField()
          ],
        },
      ],
    },
    {
      label: 'Recent Articles',
      name: 'recentArticles',
      widget: 'object',
      fields: [Title, backgroundImageField()],
    },
    {
      label: 'Form',
      name: 'form',
      widget: 'object',
      fields: [
        backgroundImageField(),
        {
          label: 'Form',
          name: 'form',
          widget: 'relation',
          collection: 'forms',
          search_fields: ['title'],
          display_fields: ['{{id}} - {{title}}'],
          value_field: 'id',
          required: false,
        },
      ],
    },
  ],
};

export default Config;
