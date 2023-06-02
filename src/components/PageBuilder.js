import React from 'react';
import { graphql } from 'gatsby';

import Hero from '@/blocks/Hero';
import Heros from '@/blocks/Heros';
import RecentArticles from '../blocks/RecentArticles';
import ContentImage from '../blocks/ContentImage';
import Perks from '../blocks/Perks';
import Content from '../blocks/Content';

export default function PageBuilder({ blocks, preview = false }) {
  return (
    <>
      {blocks &&
        blocks.map((block, i) => {
          switch (block.type) {
            case 'hero_slider':
              return <Heros key={i} data={block} />;
            case 'hero':
              return <Hero key={i} data={block} />;
            case 'recentArticles':
              return <RecentArticles key={i} data={block} preview={preview} />;
            case 'content_image':
              return <ContentImage key={i} data={block} preview={preview} />;
            case 'perks':
              return <Perks key={i} data={block} preview={preview} />;
            case 'content':
              return <Content key={i} data={block} preview={preview} />;
            default:
              return (
                <div className='container mx-auto' key={i}>
                  <div className='text-center'>
                    Missing Section {block.type}
                  </div>
                </div>
              );
          }
        })}
    </>
  );
}

export const query = graphql`
  fragment Blocks on MarkdownRemarkFrontmatter {
    blocks {
      type
      title
      
    }
  }
`;
