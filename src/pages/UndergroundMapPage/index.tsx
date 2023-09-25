import { FC, Suspense, lazy, memo } from "react";

const UndergroundMapPage: FC = () => {
  const UndergroundMap = lazy(() => import('../../components/UndergroundMap'));
  
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <UndergroundMap />
      </Suspense>
    </>
  )
};

export default memo(UndergroundMapPage);
