import type { Metadata } from "next";
import Image from "next/image";
import { FileDown } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import {
  ListField,
  PageHeader,
  SideCard,
  TextareaField,
  TextField,
} from "@/components/lab/publish";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Globals · Profile",
  description:
    "Contact details, availability, and profile information for Harrie Kevin Gallo.",
};

export default function GlobalsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <PageHeader title="Profile" backHref="/lab" backLabel="Globals" />

      <div className="grid items-start gap-5 lg:grid-cols-[1fr_320px]">
        <div className="cp-card space-y-5 p-5">
          <h2 className="text-sm font-semibold text-cp-ink">Main Content</h2>

          <div className="space-y-1.5">
            <span className="cp-label">Avatar</span>
            <div className="flex items-center gap-3 rounded-lg border border-cp-line p-3">
              <Image
                src={avatar}
                alt={profile.name}
                width={48}
                height={48}
                className="size-12 rounded-full object-cover"
                style={{ objectPosition: "50% 26%" }}
              />
              <div className="min-w-0 text-[13px]">
                <p className="truncate font-medium text-cp-ink">avatar.jpg</p>
                <p className="text-cp-faint">Asset · images</p>
              </div>
            </div>
          </div>

          <TextField label="Name" value={profile.name} required />
          <TextField label="Title" value={profile.jobTitle} />
          <TextField label="Location" value={profile.location} />
          <TextField label="Email" value={profile.email} required />
          <TextField label="Phone" value={profile.phone} />
          <TextareaField label="Availability" value={profile.availability} />
        </div>

        <div className="space-y-5">
          <SideCard>
            <ListField
              label="Facts"
              items={profile.facts.map(
                (fact) => `${fact.label}: ${fact.value}`
              )}
            />
          </SideCard>

          <SideCard>
            <ListField
              label="Socials"
              items={profile.socials.map((social) => social.label)}
            />
            <div className="flex flex-wrap gap-2">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-pill transition-colors hover:text-cp-link"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          </SideCard>

          <SideCard>
            <span className="cp-label">Résumé</span>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="cp-btn w-full"
            >
              <FileDown className="size-4" strokeWidth={1.75} />
              Download CV
            </a>
          </SideCard>
        </div>
      </div>
    </div>
  );
}
