import React from 'react'

import './index.scss'

export const PostContainer = ({ html }) => (
  <div id='PostContainer' dangerouslySetInnerHTML={{ __html: html }} />
)
