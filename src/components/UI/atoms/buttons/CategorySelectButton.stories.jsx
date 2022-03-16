import CategorySelectButton from './CategorySelectButton';

export default {
  title: '버튼',
};

const SelectedTemplate = (args) => <CategorySelectButton {...args} />;

export const CategorySelect = SelectedTemplate.bind({});

CategorySelect.args = {
  selected: true,
  children: '전체',
};

CategorySelect.args = {
  selected: false,
  children: '프론트엔드',
};

CategorySelect.storyName = '카테고리 선택버튼';
