'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ExternalLink,
  Facebook,
  FileDown,
  FlaskConical,
  Gauge,
  Github,
  Globe,
  Image as ImageIcon,
  Layers,
  Linkedin,
  LogOut,
  Mail,
  Menu,
  Search,
  X,
} from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import ThemeToggle from "@/components/ThemeToggle";
import SearchPalette, { type SearchEntry } from "@/components/lab/SearchPalette";
import { profile } from "@/data/profile";

const collections = [
  { label: "Websites", href: "/lab/websites" },
  { label: "Services", href: "/lab/services" },
  { label: "Tools", href: "/lab/tools" },
  { label: "Experience", href: "/lab/experience" },
];

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook: Facebook,
} as const;

const prettify = (slug: string) => {
  const words = slug.replace(/-/g, " ");
  const label = words.charAt(0).toUpperCase() + words.slice(1);
  return label.length > 26 ? `${label.slice(0, 26)}…` : label;
};

const breadcrumbsFor = (path: string): string[] => {
  const segments = path.replace(/^\/lab\/?/, "").split("/").filter(Boolean);
  if (segments.length === 0) return ["Dashboard"];
  const [head, slug] = segments;
  const collection = collections.find(
    (item) => item.href === `/lab/${head}`
  );
  if (collection) {
    return slug
      ? ["Collections", collection.label, prettify(slug)]
      : ["Collections", collection.label];
  }
  if (head === "collections") return ["Collections"];
  if (head === "assets") return ["Assets", "Websites"];
  if (head === "globals") return ["Globals", "Profile"];
  return [prettify(head)];
};

const SidebarNav = ({
  pathname,
  onNavigate,
  onSearch,
}: {
  pathname: string;
  onNavigate: () => void;
  onSearch: () => void;
}) => {
  const isActive = (href: string) =>
    href === "/lab" ? pathname === "/lab" : pathname.startsWith(href);

  return (
    <nav aria-label="Control panel" className="flex flex-col gap-5 p-3">
      <Link
        href="/lab"
        onClick={onNavigate}
        data-active={isActive("/lab")}
        className="cp-side-item"
      >
        <Gauge className="size-4 shrink-0" strokeWidth={1.75} />
        Dashboard
      </Link>

      <div>
        <p className="px-2.5 pb-1.5 text-[13px] font-semibold text-cp-ink">
          Content
        </p>
        <Link
          href="/lab/collections"
          onClick={onNavigate}
          data-active={isActive("/lab/collections")}
          className="cp-side-item"
        >
          <Layers className="size-4 shrink-0" strokeWidth={1.75} />
          Collections
        </Link>
        <ul className="mt-0.5 space-y-0.5 pl-6">
          {collections.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                data-active={isActive(item.href)}
                className="cp-side-item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/lab/assets"
          onClick={onNavigate}
          data-active={isActive("/lab/assets")}
          className="cp-side-item mt-0.5"
        >
          <ImageIcon className="size-4 shrink-0" strokeWidth={1.75} />
          Assets
        </Link>
        <Link
          href="/lab/globals"
          onClick={onNavigate}
          data-active={isActive("/lab/globals")}
          className="cp-side-item mt-0.5"
        >
          <Globe className="size-4 shrink-0" strokeWidth={1.75} />
          Globals
        </Link>
      </div>

      <div>
        <p className="px-2.5 pb-1.5 text-[13px] font-semibold text-cp-ink">
          Tools
        </p>
        <button type="button" onClick={onSearch} className="cp-side-item">
          <Search className="size-4 shrink-0" strokeWidth={1.75} />
          Search
        </button>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="cp-side-item mt-0.5"
        >
          <ExternalLink className="size-4 shrink-0" strokeWidth={1.75} />
          Live site
        </Link>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="cp-side-item mt-0.5"
        >
          <FileDown className="size-4 shrink-0" strokeWidth={1.75} />
          Résumé
        </a>
      </div>
    </nav>
  );
};

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Profile menu"
        className="flex items-center gap-1 rounded-full p-0.5 hover:bg-white/10"
      >
        <Image
          src={avatar}
          alt=""
          width={28}
          height={28}
          className="size-7 rounded-full object-cover"
          style={{ objectPosition: "50% 26%" }}
        />
        <ChevronDown
          className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={1.75}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="cp-card absolute top-full right-0 z-50 mt-2 w-60 overflow-hidden text-cp-ink"
        >
          <div className="border-b border-cp-line px-4 py-3">
            <p className="text-sm font-semibold">{profile.name}</p>
            <p className="mt-0.5 truncate text-xs text-cp-faint">
              {profile.email}
            </p>
          </div>
          <div className="p-1.5">
            {profile.socials.map((social) => {
              const Icon =
                socialIcons[social.label as keyof typeof socialIcons] ?? Globe;
              return (
                <a
                  key={social.label}
                  role="menuitem"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="cp-side-item"
                >
                  <Icon className="size-4 shrink-0" strokeWidth={1.75} />
                  {social.label}
                </a>
              );
            })}
            <a
              role="menuitem"
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="cp-side-item"
            >
              <Mail className="size-4 shrink-0" strokeWidth={1.75} />
              Email me
            </a>
          </div>
          <div className="border-t border-cp-line p-1.5">
            <Link
              role="menuitem"
              href="/"
              onClick={() => setOpen(false)}
              className="cp-side-item"
            >
              <LogOut className="size-4 shrink-0" strokeWidth={1.75} />
              Back to main website
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const LabShell = ({
  searchIndex,
  children,
}: {
  searchIndex: SearchEntry[];
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  /* Close the mobile drawer whenever the route changes */
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const crumbs = breadcrumbsFor(pathname);

  return (
    <div className="flex min-h-dvh flex-col bg-cp-bg text-cp-ink">
      {/* Topbar */}
      <header className="sticky top-0 z-40 flex h-14 items-center gap-3 bg-cp-topbar px-4 text-cp-topbar-ink">
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={sidebarOpen}
          className="rounded-md p-1.5 hover:bg-white/10 lg:hidden"
        >
          {sidebarOpen ? (
            <X className="size-5" strokeWidth={1.75} />
          ) : (
            <Menu className="size-5" strokeWidth={1.75} />
          )}
        </button>

        <Link href="/lab" className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-md bg-accent">
            <FlaskConical className="size-4 text-[#101010]" strokeWidth={2} />
          </span>
          <span className="text-sm font-semibold text-white">Gals Lab</span>
          <span className="rounded border border-cp-topbar-line px-1.5 py-0.5 text-[10px] font-medium">
            Pro
          </span>
        </Link>

        <nav aria-label="Breadcrumb" className="hidden items-center gap-2 text-[13px] md:flex">
          {crumbs.map((crumb) => (
            <span key={crumb} className="flex items-center gap-2">
              <span className="text-cp-topbar-line">/</span>
              <span>{crumb}</span>
            </span>
          ))}
        </nav>

        <div className="flex-1" />

        <button
          type="button"
          onClick={() => setPaletteOpen(true)}
          className="flex h-8 items-center gap-2 rounded-lg bg-white/10 px-3 text-[13px] transition-colors hover:bg-white/15"
        >
          <Search className="size-3.5" strokeWidth={1.75} />
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden rounded border border-cp-topbar-line px-1 text-[10px] sm:inline">
            ⌘K
          </kbd>
        </button>

        <ThemeToggle className="hover:bg-white/10" />

        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          title="View live site"
          className="hidden rounded-md p-1.5 hover:bg-white/10 sm:block"
        >
          <ExternalLink className="size-4" strokeWidth={1.75} />
        </Link>

        <ProfileMenu />
      </header>

      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r border-cp-line bg-cp-sidebar lg:block">
          <SidebarNav
            pathname={pathname}
            onNavigate={() => setSidebarOpen(false)}
            onSearch={() => setPaletteOpen(true)}
          />
        </aside>

        {/* Mobile drawer */}
        {sidebarOpen && (
          <div className="fixed inset-0 top-14 z-30 lg:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            />
            <aside className="absolute top-0 bottom-0 left-0 w-64 overflow-y-auto border-r border-cp-line bg-cp-sidebar">
              <SidebarNav
                pathname={pathname}
                onNavigate={() => setSidebarOpen(false)}
                onSearch={() => {
                  setSidebarOpen(false);
                  setPaletteOpen(true);
                }}
              />
            </aside>
          </div>
        )}

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>

      <SearchPalette
        entries={searchIndex}
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
      />
    </div>
  );
};

export default LabShell;
