import type { ReactNode } from "react";
import { profile } from "./content";
import {
  IconAcademicCap,
  IconBuildingLibrary,
  IconEnvelope,
  IconGitHub,
  IconMapPin,
} from "./icons";
import { RichText } from "./RichText";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-stone-200/80 py-8 first:border-t-0 first:pt-0 md:py-9">
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-[var(--color-accent)] md:text-[1.65rem]">
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-[0.98rem] leading-relaxed text-[var(--color-muted)]">
        {children}
      </div>
    </section>
  );
}

function ExternalIcon() {
  return (
    <svg
      className="mb-0.5 ml-0.5 inline h-3.5 w-3.5 opacity-50"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--color-accent)] focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <main id="main" className="mx-auto max-w-3xl px-5 pb-16 pt-12 md:px-8 md:pt-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
          <div className="mx-auto shrink-0 md:mx-0">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-full bg-gradient-to-br from-stone-200 to-stone-100 opacity-80"
                aria-hidden
              />
              <img
                src={profile.avatar}
                alt=""
                width={160}
                height={160}
                className="relative block h-36 w-36 rounded-full border border-stone-200/90 object-cover shadow-sm md:h-40 md:w-40"
              />
            </div>
          </div>
          <div className="min-w-0 flex-1 text-center md:text-left">
            <p className="font-serif text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
              {profile.name}
            </p>
            <p className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[0.95rem] text-[var(--color-muted)] md:justify-start">
              <span className="inline-flex items-center gap-2">
                <IconAcademicCap className="h-[1.1em] w-[1.1em] shrink-0 text-stone-500" />
                <span>Undergraduate · Computer Science</span>
              </span>
            </p>
            <p className="mt-2 flex items-center justify-center gap-2 text-[0.95rem] text-[var(--color-muted)] md:justify-start">
              <IconBuildingLibrary className="h-[1.1em] w-[1.1em] shrink-0 text-stone-500" />
              <span>{profile.school}</span>
            </p>
            <p className="mt-2 flex items-center justify-center gap-2 text-sm text-stone-500 md:justify-start">
              <IconMapPin className="h-[1.05em] w-[1.05em] shrink-0 text-stone-400" />
              <span>{profile.location}</span>
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-stone-300/90 bg-white px-3.5 py-2 text-sm font-medium text-[var(--color-ink)] shadow-sm transition hover:border-stone-400 hover:bg-stone-50"
              >
                <IconEnvelope className="h-4 w-4 text-stone-500" />
                Email
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-stone-300/90 bg-white px-3.5 py-2 text-sm font-medium text-[var(--color-ink)] shadow-sm transition hover:border-stone-400 hover:bg-stone-50"
                title="GitHub profile"
              >
                <IconGitHub className="h-4 w-4 text-stone-700" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <Section id="about" title="About">
            <p className="text-[var(--color-ink)]/90">{profile.about}</p>
          </Section>

          <Section id="education" title="Education">
            <ul className="list-none space-y-3 pl-0">
              {profile.education.map((e) => (
                <li key={e.detail} className="text-[var(--color-ink)]/90">
                  <p className="text-sm text-stone-500">{e.period}</p>
                  <p className="mt-0.5">{e.detail}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="research" title="Research Interests">
            <p className="text-[var(--color-ink)]/90">{profile.research}</p>
          </Section>

          <Section id="projects" title="Projects">
            <ul className="space-y-4">
              {profile.projects.map((p) => (
                <li key={p.url}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-1 font-medium text-[var(--color-accent)]"
                  >
                    <span className="border-b border-transparent transition group-hover:border-[var(--color-accent)]/40">
                      {p.title}
                    </span>
                    <ExternalIcon />
                  </a>
                  <p className="mt-1.5 pl-0 text-[var(--color-muted)]">{p.description}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="teaching" title="Teaching">
            <div className="space-y-6">
              {profile.teaching.map((block) => (
                <div key={block.role}>
                  <h3 className="font-sans text-lg font-semibold text-[var(--color-ink)]">
                    {block.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-stone-500">{block.subtitle}</p>
                  <div className="mt-3 space-y-4">
                    {block.terms.map((term) => (
                      <div key={term.when}>
                        <p className="text-sm font-medium italic text-[var(--color-accent)]">
                          {term.when}
                        </p>
                        <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-stone-400">
                          {term.bullets.map((b, i) => (
                            <li key={i} className="text-[var(--color-ink)]/90">
                              <RichText text={b} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </main>

      <footer className="border-t border-stone-200/80 bg-stone-100/40 py-6">
        <div className="mx-auto max-w-3xl px-5 text-center text-sm text-stone-500 md:px-8">
          {profile.copyright}
        </div>
      </footer>
    </div>
  );
}
