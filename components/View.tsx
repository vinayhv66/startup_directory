import React from 'react';
import ReactMarkdown from 'react-markdown';
import Ping from '@/components/Ping';
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { writeClient } from '@/sanity/lib/write-client';


const ViewClient = ({ totalViews }: { totalViews: number }) => {
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
      
    </div>
  );
};

//  Server Component to fetch/update views and render client UI
const View = async ({ id }: { id: string }) => {
  const { views = 0 } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  await writeClient
    .patch(id)
    .set({ views: views + 1 })
    .commit();

  return <ViewClient totalViews={views + 1} />;
};

export default View;
