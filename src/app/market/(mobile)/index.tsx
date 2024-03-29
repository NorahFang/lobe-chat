'use client';

import { memo } from 'react';

import Card from '@/app/market/features/Card';

import Index from '../index';
import CardRender from './features/AgentCard';
import Layout from './layout.mobile';

export default memo(() => (
  <Layout>
    <Index />
    <Card CardRender={CardRender} mobile />
  </Layout>
));
