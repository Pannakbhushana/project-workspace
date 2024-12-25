import React, { PropsWithChildren } from 'react';

export const AppLayout: React.FC<PropsWithChildren> = ({
  children,
}) => {

  return (
    <div>
      <main>
           
           {children}
         </main>
    </div>
  );
};

export default AppLayout;
