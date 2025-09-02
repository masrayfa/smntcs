import { A } from '@solidjs/router';

export default function Nav() {
  const downloadFile = () => {
    window.location.href = '/rayzen_0.1.0_x64_en-US.msi';
  };

  return (
    <nav class="border-b-4 border-[#d3c7bf] z-10">
      <div class="container flex justify-between items-center p-8 text-[#ae9f94] ">
        <div class="cursor-pointer">
          <A href="/" class="text-xl">
            SMNTCS
          </A>
        </div>
        <div class="flex gap-5 ">
          <button
            class="hover:text-[#FF7A30] transition font-bold cursor-pointer"
            // onclick={downloadFile}
          >
            <A href="/download">Download</A>
          </button>
          <span
            class="hover:text-[#FF7A30] transition font-bold cursor-pointer"
            onclick={() => {
              alert('🚧  Work in progress');
            }}
          >
            Products
          </span>
          <span
            class="hover:text-[#FF7A30] transition font-bold cursor-pointer"
            onclick={() => {
              alert('🚧  Work in progress');
            }}
          >
            Blog
          </span>
          <span
            class="hover:text-[#FF7A30] transition font-bold cursor-pointer"
            onclick={() => {
              alert('🚧  Work in progress');
            }}
            aria-disabled
          >
            Docs
          </span>
        </div>
      </div>
    </nav>
  );
}
