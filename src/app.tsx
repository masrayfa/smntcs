import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import Nav from '~/components/Nav';
import './app.css';

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="h-screen flex flex-col">
          <Nav />
          <div class="flex-1">
            <Suspense>{props.children}</Suspense>
          </div>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
