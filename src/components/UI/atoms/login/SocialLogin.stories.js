import React from 'react';
import SocialLogin from './SocialLogin';

export default {
  title: '로그인/소셜 로그인 버튼',
  component: SocialLogin,
};

export const Kakao = () => <SocialLogin sns='kakao' />;
export const Google = () => <SocialLogin sns='google' />;
export const Github = () => <SocialLogin sns='github' />;
export const Naver = () => <SocialLogin sns='naver' />;

Kakao.storyName = '카카오';
Google.storyName = '구글';
Github.storyName = '깃헙';
Naver.storyName = '네이버';