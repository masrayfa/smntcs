import { A } from '@solidjs/router';
import { FiDownload, FiLink } from 'solid-icons/fi';
import BookmarkManager from '~/components/BookmarkManager';

export default function Home() {
  const downloadFile = () => {
    window.location.href = '/rayzen_0.1.0_x64_en-US.msi';
  };

  return (
    <main class="flex flex-col h-full">
      <div class="text-[#ae9f94] flex-1 flex justify-center items-center -mt-16">
        <div class="flex gap-6">
          <BookmarkManager />
          <div class="flex flex-col justify-between">
            <div>
              <div class="font-bold">
                <h1 class="text-6xl ">Your bookmarks</h1>
                <h1 class="text-6xl">manager.</h1>
              </div>
              <h2 class="text-3xl">inspired by lack feature</h2>
              <h2 class="text-3xl">of zen browser.</h2>
            </div>

            <button
              class="flex gap-3 items-center text-xl cursor-pointer"
              // onclick={downloadFile}
            >
              <A href="/">
                <p>Try yourself</p>
                <FiDownload />
              </A>
            </button>

            <div class="flex gap-3 items-center cursor-pointer hover:underline">
              <a>learn more here</a>
              <FiLink />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
