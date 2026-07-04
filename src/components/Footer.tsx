import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-purple-400/20 bg-black px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-purple-50/60 md:flex-row md:items-center md:justify-between">
        <p>
          Copyright {new Date().getFullYear()} {personal.name}. All rights
          reserved.
        </p>
        <p>Built using Next.js + Tailwind.</p>
      </div>
    </footer>
  );
}
