import { A } from '@solidjs/router';
import BookmarkManager from '~/components/BookmarkManager';

export default function Download() {
  return (
    <main class="flex flex-col h-full p-16">
      <div class="text-[#ae9f94] flex-1 flex justify-center items-center -mt-16">
        <div class="max-w-4xl mx-auto px-8">
          {/* Header */}
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold mb-4">Download Rayzen</h1>
            <p class="text-xl text-gray-400">
              Organize your URLs in folders - inspired by the lack of this
              feature in Zen Browser
            </p>
          </div>

          {/* Preview */}
          <div class="flex justify-center mb-12">
            <BookmarkManager />
          </div>

          {/* Download Options */}
          <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-[#ae9f94]">
            {/* Option 1: Direct Download (Disabled) */}
            <div class="bg-[#d3c7bf] rounded-lg p-6 border  border-[#baaa9f] opacity-60">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 10v6m0 0l-4-4m4 4l4-4m-4-8a8 8 0 100 16 8 8 0 000-16z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-black  ">
                    Download Executable
                  </h3>
                  <p class="text-sm text-black">Windows installer (.msi)</p>
                </div>
              </div>

              <p class="text-black mb-4">
                Quick and easy installation - just download and run.
              </p>

              <div class="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-3 mb-4">
                <div class="flex items-center gap-2 text-black">
                  <svg
                    class="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    ></path>
                  </svg>
                  <span class="text-sm  font-medium">
                    Currently Unavailable
                  </span>
                </div>
                <p class="text-xs text-black mt-1">
                  We're working on fixing the installer issues. Please use the
                  manual installation method below.
                </p>
              </div>

              <button
                disabled
                class="w-full bg-gray-700 text-gray-400 py-3 px-4 rounded-lg cursor-not-allowed"
              >
                Download Not Available
              </button>
            </div>

            {/* Option 2: Manual Installation */}
            <div class="bg-[#d3c7bf] rounded-lg p-6 border  border-[#baaa9f] opacity-60">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-black  ">
                    Build from Source
                  </h3>
                  <p class="text-sm text-black">Clone and build manually</p>
                </div>
              </div>

              <p class="text-black mb-4">
                Full control over the build process. Requires some technical
                setup but guaranteed to work.
              </p>

              <div class="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-3 mb-9">
                <div class="flex items-center gap-2 text-black">
                  <svg
                    class="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span class="text-sm font-medium">
                    Prerequisites Required
                  </span>
                </div>
                <p class="text-xs text-black">
                  Node.js, Rust, Bun, and Git must be installed first.
                </p>
              </div>

              <A
                href="https://github.com/masrayfa/rayzen"
                target="_blank"
                class="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
                View on GitHub
              </A>
            </div>
          </div>

          {/* System Requirements */}
          <div class="mt-12 bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              System Requirements
            </h3>

            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <h4 class="font-medium text-white mb-2">Operating System</h4>
                <ul class="text-sm text-gray-400 space-y-1">
                  <li>• Windows 10/11 (64-bit)</li>
                  <li>• macOS 10.15+</li>
                  <li>• Linux (Ubuntu 18.04+)</li>
                </ul>
              </div>

              <div>
                <h4 class="font-medium text-white mb-2">Hardware</h4>
                <ul class="text-sm text-gray-400 space-y-1">
                  <li>• 4GB RAM minimum</li>
                  <li>• 1GB free disk space</li>
                  <li>• Internet connection</li>
                </ul>
              </div>

              <div>
                <h4 class="font-medium text-white mb-2">For Building</h4>
                <ul class="text-sm text-gray-400 space-y-1">
                  <li>• Node.js 18+</li>
                  <li>• Rust 1.70+</li>
                  <li>• Bun runtime</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
