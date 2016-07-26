// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import TBD from 'grommet/components/TBD';
import { updatePageTitle } from '../utils/a11y';

export default class Learn extends Component {
  componentDidMount () {
    updatePageTitle('Learn');
  }

  render () {
    return (
      <DocsArticle title="Learn" colorIndex="neutral-4">

        <TBD />

      </DocsArticle>
    );
  }
};