import React from "react";
import { PropsWithChildren } from "react";


export const AppLayout: React.FC<PropsWithChildren> = ({
  children,
}) => {

  return (
    <div>
      <main className='mt-2'>{children}</main>
    </div>
  );
};

export default AppLayout;
