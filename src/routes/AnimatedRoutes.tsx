import React, { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ErrorPage from '../pages/ErrorPage';
import Spinner from '../components/Spinner';

const Home = lazy(() => import('../pages/Home'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Contact = lazy(() => import('../pages/Contact'));
const Studio = lazy(() => import('../pages/subgalleries/Studio'));
const Reportage = lazy(() => import('../pages/subgalleries/Reportage'));
const Travel = lazy(() => import('../pages/subgalleries/Travel'));
const Animals = lazy(() => import('../pages/subgalleries/Animals'));
const Business = lazy(() => import('../pages/offer/Business'));
const Image = lazy(() => import('../pages/offer/Image'));
const Wedding = lazy(() => import('../pages/offer/Wedding'));
const NonCommercialReportage = lazy(() => import('../pages/offer/NonCommercialReportage'));
const CommercialReportage = lazy(() => import('../pages/offer/CommercialReportage'));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div className='page-container'>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route path='oferta'>
            <Route
              path='sesja-biznesowa'
              element={
                <Suspense fallback={<Spinner />}>
                  <Business />
                </Suspense>
              }
            />
            <Route
              path='sesja-wizerunkowa'
              element={
                <Suspense fallback={<Spinner />}>
                  <Image />
                </Suspense>
              }
            />
            <Route
              path='reportaz-slubny'
              element={
                <Suspense fallback={<Spinner />}>
                  <Wedding />
                </Suspense>
              }
            />
            <Route
              path='reportaz-okolicznosciowy'
              element={
                <Suspense fallback={<Spinner />}>
                  <NonCommercialReportage />
                </Suspense>
              }
            />
            <Route
              path='reportaz-firmowy'
              element={
                <Suspense fallback={<Spinner />}>
                  <CommercialReportage />
                </Suspense>
              }
            />
          </Route>
          <Route path='galeria'>
            <Route
              index
              element={
                <Suspense fallback={<Spinner />}>
                  <Gallery />
                </Suspense>
              }
            />
            <Route
              path='studio-portret'
              element={
                <Suspense fallback={<Spinner />}>
                  <Studio />
                </Suspense>
              }
            />
            <Route
              path='reportaz'
              element={
                <Suspense fallback={<Spinner />}>
                  <Reportage />
                </Suspense>
              }
            />
            <Route
              path='travel'
              element={
                <Suspense fallback={<Spinner />}>
                  <Travel />
                </Suspense>
              }
            />
            <Route
              path='zwierzeta'
              element={
                <Suspense fallback={<Spinner />}>
                  <Animals />
                </Suspense>
              }
            />
          </Route>
          <Route
            path='kontakt'
            element={
              <Suspense fallback={<Spinner />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path='*'
            element={
              <Suspense fallback={<Spinner />}>
                <ErrorPage />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
