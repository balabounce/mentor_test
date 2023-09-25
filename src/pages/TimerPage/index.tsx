import { Suspense, lazy, memo } from "react";
const TimerPage = () => {
  const Timer = lazy(() => import('../../components/Timer'));
  
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Timer />
      </Suspense>
    </>
  )
};

export default memo(TimerPage);