---
id: JUJDCFVbWC
type: page
layout: page-builder
title: Home Page
permalink: /
thumbnail: ""
blocks:
  - type: hero_slider
    heros:
      - hero:
          variant: full
          title: Edge-Base
          content: Your next **EDGE** website starter.
          buttons:
            - button:
                variant: button
                content: Start your journey
                url: /start-your-jurney
          photo:
            image: /img/wojciech-kaluzny-20-312x312.jpg
            alt: Starter Image
          bg_photo:
            bg_image: /img/white_wood.jpg
            bg_alt: Hero BG
            enable_parallax: true
      - hero:
          variant: full
          title: Not Just Website;
          content: "# its Fastest Website"
          bg_photo:
            bg_image: /img/white_wood.jpg
            bg_alt: Second Hero BG
            enable_parallax: true
          photo:
            image: /img/wojciech-kaluzny-20-312x312.jpg
  - type: perks
    title: Features
    columns:
      - title: Manual Initialization
        content: Ditch yaml for CMS configuration, use JS instead. Ditch yaml for CMS
          configuration, use JS instead
        photo:
          image: /img/4000_2_01.jpg
        show_popup: true
        permalink: /xyz/
    content: ""
  - type: content_image
    variant: reversed
    title: Block-based page creator with Previews
    content: Create blocks and reuse them across different pages that can be created
      using Netlify CMS UI. Previews will be generated automatically for all
      blocks!
    buttons:
      - button:
          variant: default
          content: Get it now
          url: https://github.com/clean-commit/gatsby-starter-henlo
    photo:
      image: /img/frame-69.png
      alt: Block based page creator
  - type: content_image
    variant: default
    photo:
      alt: Premade components schema
      image: /img/frame-77.png
    title: Premade components & Netlify CMS settings
    content: >-
      We've created a collection of basic UI elements, so you can quickly create
      new blocks and style them from a single component.


      We did the same for Netlify CMS configuration. You can use basic fields to create new blocks quicker then ever!
    buttons:
      - button:
          variant: default
          content: Get it now
          url: https://github.com/clean-commit/gatsby-starter-henlo
  - type: content_image
    variant: reversed
    title: Configuration exposed through Netlify CMS
    content: >-
      No need to change configuration using `gatsby-node.js` or `.env` files!


      Admins of the site can setup options using Netlify CMS's UI instead. This allows for reusable themes & templates
    photo:
      image: /img/frame-72.png
      alt: Netlify CMS configuration with Henlo
seo:
  ogimage: /img/henlo-cover.png
---
