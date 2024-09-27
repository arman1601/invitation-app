import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Используем lazy для ленивой загрузки компонентов страниц
const MainSite = React.lazy(() => import('./pages/MainSite.jsx'));
const AdminSite = React.lazy(() => import('./manage-panel/ManagePanel.jsx'));
const InvitationTemplatePage = React.lazy(() => import('./invitation-templates/InvitationTemplatePage.jsx'));
const NotFound = React.lazy(() => import('./pages/NotFound.jsx'));

const routes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading MainSite...</div>}>
        <MainSite />
      </Suspense>
    ),
  },
  {
    path: '/admin',
    element: (
      <Suspense fallback={<div>Loading AdminPanel...</div>}>
        <AdminSite />
      </Suspense>
    ),
  },
  {
    path: '/invitation/:id', // Убедись, что этот маршрут есть
    element: (
      <Suspense fallback={<div>Loading Invitation Template...</div>}>
        <InvitationTemplatePage />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <NotFound /> ,
  },
];

const router = createBrowserRouter(routes);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
