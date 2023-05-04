import { FC, PropsWithChildren } from 'react';

const SettingsSectionItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='w-full flex items-center justify-between space-x-4 py-5 first:pt-0 last:pb-0'>
      {children}
    </div>
  );
};

export default SettingsSectionItem;
