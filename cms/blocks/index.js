import { Buttons, Title, Content, VariantField, ImageField, Heros, backgroundSettingsField, HeightField, ColorTheme } from '../fields';


const Config = {
  label: 'Blocks',
  name: 'blocks',
  widget: 'list',
  types: [
    {
      label: 'Hero Slider',
      name: 'hero_slider',
      widget: 'list',
      summary: 'Slider {{fields.title}}',
      fields: [
        VariantField('default', ['default']),
        HeightField('full'),
        Heros,
      ],
    },
    {
      label: 'Content',
      name: 'content',
      widget: 'object',
      summary: 'Content {{fields.content}}',
      fields: [
        VariantField('left-hand', ['left-hand','right-hand','centered']),
        Content,
        {
          label: 'Columns',
          name: 'columns',
          widget: 'list',
          summary: '{{fields.title}}',
          fields: [
            Content,
          ],
        }
      ],
    },
    {
      label: 'Cards Slider',
      name: 'cards_slider',
      widget: 'object',
      summary: 'Slide {{fields.title}}',
      fields: [
        Title,
        VariantField('wide', ['wide', 'narrow']),
        {
          label: 'Cards',
          name: 'columns',
          widget: 'list',
          summary: '{{fields.title}}',
          fields: [
            Title,
            {
              label: 'Type',
              name: 'type',
              widget: 'string',
              required: false,
            },
            {
              label: 'Permalink',
              name: 'permalink',
              widget: 'string',
              required: false,
            },
            Content,
            VariantField('bg_image', [{
              name: 'bg_image',
              label: 'Image in Background'
            }, {
              name: 'image_above',
              label: 'Image above content'
            }]),
            ImageField(),
          ],
        }
      ],
    },
    {
      label: 'CTA',
      name: 'content_image',
      widget: 'object',
      summary: 'CTA {{fields.title}}',
      fields: [
        Title,
        Content,
        Buttons,
        ImageField(),
        backgroundSettingsField(),
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
        VariantField('default', ['default', 'cards', 'gallery']),
        Content,
        backgroundSettingsField(),
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
              required: false,
            },
            {
              label: 'Permalink',
              name: 'permalink',
              widget: 'string',
              required: false,
            },
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
      fields: [Title, backgroundSettingsField()],
    },
    {
      label: 'Form',
      name: 'form',
      widget: 'object',
      fields: [
        Title,
        Content,
        backgroundSettingsField(),
        ImageField(),
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
