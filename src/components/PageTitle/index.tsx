import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · 云智助手` : '云智助手';
  }, [title]);

  return null;
});

export default PageTitle;
