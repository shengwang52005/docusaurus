/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {translate} from '@docusaurus/Translate';
import type {TagsListItem} from '@docusaurus/utils';

export const translateTagsPageTitle = (): string =>
  translate({
    id: 'theme.tags.tagsPageTitle',
    message: 'Tags',
    description: 'The title of the tag list page',
  });

export type TagLetterEntry = {letter: string; tags: TagsListItem[]};
