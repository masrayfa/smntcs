import { AiOutlineSearch } from 'solid-icons/ai';
import { BsPlus, BsSearch } from 'solid-icons/bs';
import { FiFolder, FiPlus, FiX } from 'solid-icons/fi';
import { createSignal, For } from 'solid-js';

export default function BookmarkManager() {
  const [groups] = createSignal([
    { id: 1, name: 'ambience', active: true },
    { id: 2, name: 'pelem', active: false },
    { id: 3, name: 'nyesel ga list ini', active: false },
    { id: 4, name: 'anim', active: false },
  ]);

  const [bookmarks] = createSignal([
    {
      id: 1,
      title: 'rain',
      url: 'https://www.youtube.com/watch?v=mPZkdNFNNps&t=147...',
      favicon: '🌧️',
    },
    {
      id: 2,
      title: 'lofi.cafe',
      url: 'https://www.lofi.cafe/',
      favicon: '☕',
    },
  ]);

  return (
    <div class="bg-[#E9E3DF] w-[700px] h-[400px] text-white rounded-lg overflow-hidden shadow-2xl">
      {/* Header */}
      <div class="bg-[#d3c7bf] px-4 py-2 flex items-center justify-between border-b border-[#baaa9f]">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          <span class="ml-2 text-sm text-[#ae9f94]">rayzen</span>
        </div>
        <div class="flex gap-2">
          <button class="text-[#ae9f94] hover:text-white">−</button>
          <button class="text-[#ae9f94] hover:text-white">□</button>
          <button class="text-[#ae9f94] hover:text-white">×</button>
        </div>
      </div>

      {/* Search Bar */}
      <div class="px-4 py-3 border-b border-[#ae9f94]">
        <div class="flex items-center gap-3">
          <div class="flex-1 relative">
            <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ae9f94]">
              <AiOutlineSearch class="text-[#ae9f94]" />
            </div>
            <input
              type="text"
              placeholder="Search bookmarks, groups..."
              class="w-full bg-[#d3c7bf] text-white pl-10 pr-4 py-2 rounded border border-[#ae9f94] focus:border-[#948275] focus:outline-none text-sm"
            />
          </div>
          <div class="flex items-center gap-2">
            <select class="bg-[#d3c7bf] text-white border border-[#ae9f94] rounded px-3 py-2 text-sm">
              <option>entertainment</option>
              <option>work</option>
              <option>personal</option>
            </select>
            <button class="bg-[#d3c7bf] hover:bg-[#948275] text-white p-2 rounded">
              <BsPlus class="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div class="flex h-full">
        {/* Sidebar */}
        <div class="w-48 bg-gray-850 border-r border-gray-700 p-4">
          <button class="w-full flex items-center gap-2 text-left  text-[#ae9f94] hover:text-white  hover:bg-[#948275] px-3 py-2 rounded mb-3 cursor-pointer">
            <FiPlus />
            <span class="text-sm">New Group</span>
          </button>

          <div class="space-y-1">
            <For each={groups()}>
              {(group) => (
                <div
                  class={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer ${
                    group.active
                      ? 'bg-[#d3c7bf] text-white'
                      : 'text-[#ae9f94] hover:text-white hover:bg-[#948275] '
                  }`}
                >
                  <FiFolder class="text-[#ae9f94]" />
                  <span class="text-sm flex-1">{group.name}</span>
                  <button class="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-white"></button>
                  <FiX />
                </div>
              )}
            </For>
          </div>
        </div>

        {/* Main Content */}
        <div class="flex-1 p-4">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg text-[#ae9f94] font-medium">
              ambience Bookmarks
            </h2>
            <button class="text-sm  text-[#ae9f94] hover:bg-[#ae9f94] hover:text-white cursor-pointer p-3 rounded">
              Create Bookmark
            </button>
          </div>

          <div class="space-y-3">
            <For each={bookmarks()}>
              {(bookmark) => (
                <div class="flex items-center gap-3 p-3 bg-[#d3c7bf] hover:bg-[#948275] rounded border border-[#ae9f94] cursor-pointer group">
                  <div class="w-8 h-8 bg-[#ae9f94] rounded flex items-center justify-center text-sm">
                    {bookmark.favicon}
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="text-white font-medium text-sm mb-1">
                      {bookmark.title}
                    </h3>
                    <p class="text-gray-400 text-xs truncate">{bookmark.url}</p>
                  </div>
                  <div class="opacity-0 group-hover:opacity-100 flex items-center gap-1">
                    <button class="p-1 text-gray-400 hover:text-white">
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
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}
