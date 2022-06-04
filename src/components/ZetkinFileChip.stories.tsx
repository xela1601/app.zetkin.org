import { ComponentMeta, ComponentStory } from '@storybook/react';

import mockFile from 'utils/testing/mocks/mockFile';
import ZetkinFileChip from './ZetkinFileChip';

export default {
  component: ZetkinFileChip,
  title: 'Atoms/ZetkinFileChip',
} as ComponentMeta<typeof ZetkinFileChip>;

const Template: ComponentStory<typeof ZetkinFileChip> = (args) => (
  <ZetkinFileChip
    loading={args.loading}
    name={args.name}
    onDelete={args.onDelete}
    url={args.url}
  />
);

const file = mockFile();

export const linked = Template.bind({});
linked.args = {
  mimeType: file.mime_type,
  name: file.original_name,
  url: file.url,
};

export const unlinked = Template.bind({});
unlinked.args = {
  mimeType: file.mime_type,
  name: file.original_name,
};

export const withDelete = Template.bind({});
withDelete.args = {
  name: file.original_name,
  onDelete: () => undefined,
};

export const loading = Template.bind({});
loading.args = {
  loading: true,
  name: file.original_name,
};