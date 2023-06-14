import React from 'react';
import Form from '../../src/blocks/Form';

export default class FormPreview extends React.Component {
  render() {
    const blocks = this.props.widgetsFor('rows').toJS();
    let blocksUpdated = [];
    let hasBlocks = Array.isArray(blocks);
    if (hasBlocks) {
      blocksUpdated = blocks.map((block) => block.data);
    }
    console.log(blocks)
    return (
      <div>
        {hasBlocks ? (
          <Form blocks={blocksUpdated} preview={true} />
        ) : (
          <div className='py-24 text-center flex items-center justify-center'>
            <h1>Add first block to start creating your website</h1>
          </div>
        )}
      </div>
    );
  }
}
