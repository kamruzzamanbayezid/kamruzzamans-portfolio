import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./UI/Loader/Loader";

const MainContent = lazy(() => import("./App"));

export default function Root() {
  const [progress, setProgress] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateProgress = () => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        setLoading(false);
      }
    };

    if (loading) {
      setTimeout(updateProgress, 10);
    }
  }, [progress, loading]);

  return (
    <>
      {loading ? (
        <Loader progress={progress} />
      ) : (
        <Suspense fallback={<Loader progress={100} />}>
          <MainContent />
        </Suspense>
      )}
    </>
  );
}
