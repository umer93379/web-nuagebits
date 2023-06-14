import React from 'react';

import Layout from '@/components/Layout'
import Title from '../../src/components/UI/Title';
import Blog from '../../src/components/Blog';
import { get } from 'react-hook-form';

export default class BlogPreview extends React.Component {
  render() {
    const title = this.props.widgetsFor('title').toJS();
    const excerpt = this.props.widgetsFor('excerpt').toJS();
    const body = this.props.widgetsFor('body').toJS();
    const thumbnail = this.props.widgetsFor('thumbnail').toJS();
    const date = this.props.widgetsFor('date').toJS();
    const data = {
      'title': title?.data,
      'excerpt' : excerpt?.data,
      'body' : body?.data,
      'thumbnail': thumbnail?.data,
      'date': date.data
    }
    return (
      <>
        <Blog data={data} />
      </>
    );
  }
}
