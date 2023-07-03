export const ID = { label: 'ID', name: 'id', widget: 'uuid' };
export const Title = {
  label: 'Title',
  name: 'title',
  widget: 'string',
  required: false,
};

export const Content = {
  label: 'Content',
  name: 'content',
  widget: 'markdown',
  required: false,
};

export const VariantField = (initial, options = []) => ({
  label: 'Variant',
  name: 'variant',
  widget: 'select',
  default: initial,
  options: options,
});

export const HeightField = (initial) => ({
  label: 'Height',
  name: 'height',
  widget: 'select',
  default: initial,
  options: ['full', "80vh","60vh","40vh","20vh"],
});

export const ColorTheme = (initial) => ({
  label: 'Color Theme',
  name: 'color_theme',
  widget: 'select',
  default: initial,
  options: ['dark', "white"],
});
export const Overlay = (initial) => ({
  label: 'Overlay',
  name: 'overlay',
  widget: 'select',
  default: initial,
  options: ['no-overlay','dark', "white"],
});

export const ImageField = (name = 'image', fieldName = 'photo') => ({
  label: 'Image',
  name: fieldName,
  widget: 'object',
  fields: [
    { label: 'Image', name, widget: 'image', required: false },
    { label: 'Alt', name: 'alt', widget: 'string', required: false },
  ],
});

export const ImagesField = (label) => ({
  label: 'Images',
  name: 'images',
  widget: 'image',
  allow_multiple: true
});

export const backgroundSettingsField = () => ({
  label: 'Background Settings',
  name: 'bg_settings',
  widget: 'object',
  collapsed:true,
  fields: [
    VariantField('no-bg',['no-bg','bg-image','bg-image-parralax','bg-color']),
    Overlay('no-overlay'),
    { label: 'Image', name: 'bg_photo', widget: 'image', required: false },
    { label: 'Color', name: 'bg_color', widget: 'color', required: false },
    { label: 'Youtube Video', name: 'bg_video', widget: 'string', required: false },
  ],
});

export const Button = {
  label: 'Button',
  name: 'button',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Content',
      name: 'content',
      widget: 'string',
      required: false,
    },
    {
      label: 'URL',
      name: 'url',
      widget: 'string',
      required: false,
    },
    VariantField('default', ['default', 'arrow', 'button', 'secondary', 'outlined']),
  ],
};

export const Buttons = {
  label: 'Buttons',
  summary: 'Buttons',
  name: 'buttons',
  widget: 'list',
  fields: [Button],
};
export const Hero = {
  label: 'Hero',
  name: 'hero',
  widget: 'object',
  summary: 'Slide {{fields.title}}',
  fields: [
    Title,
    VariantField('default', ['default', 'visual_image_with_heading', 'full']),
    HeightField('full'),
    ColorTheme('dark'),
    backgroundSettingsField(),
    ImageField(),
    { label: 'Youtube Video', name: 'video', widget: 'string', required: false },
    Content,
    Buttons,
    {
      label: 'Columns',
      name: 'columns',
      widget: 'list',
      summary: '{{fields.title}}',
      fields: [
        Title,
        {
          label: 'Permalink',
          name: 'permalink',
          widget: 'string',
          required: false,
        },
        ImageField()
      ],
    }
  ],
};
export const Heros = {
  label: 'Heros',
  name: 'heros',
  widget: 'list',
  summary: 'Slide',
  fields: [Hero],
};
