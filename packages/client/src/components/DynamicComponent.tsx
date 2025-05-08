import React, { lazy, Suspense } from 'react';

type FileEntry = {
  name:string;
  path:string;
  children?:FileEntry[];
}

const generateRoutes = (entries: FileEntry[] = [], basePath = ''): React.JSX.Element[] => {
  if (!Array.isArray(entries)) return [];

  return entries.flatMap((entry) => {

    if (entry.children && Array.isArray(entry.children)) {
      return generateRoutes(entry.children, `${basePath}/${entry.name}`);
    }

    if (entry.name && entry.path) {
      const routePath = `${basePath}/${entry.name.replace(/\.[^/.]+$/, '')}`;
      // return (
      //   <Route
      //     key={entry.path}
      //     path={routePath}
      //     element={<DynamicComponent componentPath={entry.path} />}
      //   />
      // );
    }

    return [];
  });
};

const DynamicComponent = ({ componentPath }: { componentPath: string }) => {
  // Use React.lazy to dynamically import the component
  const Component = lazy(() => import(/* webpackInclude: /\.tsx$/ */ `${componentPath}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default DynamicComponent;