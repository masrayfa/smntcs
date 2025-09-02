export default function Nav() {
  return (
    <nav class="border-b-4 border-[#d3c7bf] z-10">
      <div class="container flex justify-between items-center p-8 text-[#ae9f94] ">
        <div class="cursor-pointer">
          <span class="text-xl">SMNTCS</span>
        </div>
        <div class="flex gap-5 ">
          <a href="/" class="hover:text-[#FF7A30] transition font-bold">
            Download
          </a>
          <a href="/" class="hover:text-[#FF7A30] transition font-bold">
            Products
          </a>
          <a href="/" class="hover:text-[#FF7A30] transition font-bold">
            Blog
          </a>
          <a href="/about" class="hover:text-[#FF7A30] transition font-bold">
            Docs
          </a>
        </div>
      </div>
    </nav>
  );
}
