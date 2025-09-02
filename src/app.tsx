import { A, Router } from '@solidjs/router';
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
          <div class="flex-1 overflow-hidden">
            <Suspense>{props.children}</Suspense>
          </div>
          {/* Footer */}
          <footer class="flex justify-between items-center px-8 py-4 text-[#ae9f94]">
            <div>
              <span>made by Sani Devuong</span>
            </div>
            <div class="flex gap-6">
              <A href="/" class="hover:text-[#FF7A30] transition font-bold">
                Home
              </A>
              <a
                href="https://github.com/masrayfa/rayzen"
                target="_blank"
                class="hover:text-[#FF7A30] transition font-bold"
              >
                GitHub
              </a>
            </div>
          </footer>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
