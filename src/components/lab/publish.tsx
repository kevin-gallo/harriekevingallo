import Link from "next/link";
import { Calendar, ChevronLeft } from "lucide-react";

/* Server-safe building blocks for Statamic-style entry views. */

export type EntryStatus = "completed" | "ongoing" | "on-hold" | "open";

const statusConfig: Record<EntryStatus, { label: string; dot: string }> = {
  completed: { label: "Completed", dot: "bg-cp-green" },
  ongoing: { label: "Ongoing", dot: "bg-amber-400" },
  "on-hold": { label: "On hold", dot: "bg-cp-faint" },
  open: { label: "Open", dot: "bg-cp-green" },
};

export const StatusDot = ({
  status = "completed",
}: {
  status?: EntryStatus;
}) => (
  <span
    aria-hidden="true"
    className={`inline-block size-2 shrink-0 rounded-full ${statusConfig[status].dot}`}
  />
);

export const StatusBadge = ({ status }: { status: EntryStatus }) => (
  <span className="inline-flex items-center gap-1.5 text-[13px] text-cp-mute">
    <StatusDot status={status} />
    {statusConfig[status].label}
  </span>
);

export const PageHeader = ({
  title,
  status,
  backHref,
  backLabel,
  actions,
}: {
  title: string;
  status?: EntryStatus;
  backHref?: string;
  backLabel?: string;
  actions?: React.ReactNode;
}) => (
  <div className="space-y-3">
    {backHref && (
      <Link
        href={backHref}
        className="inline-flex items-center gap-1 text-[13px] text-cp-mute transition-colors hover:text-cp-ink"
      >
        <ChevronLeft className="size-3.5" strokeWidth={1.75} />
        {backLabel}
      </Link>
    )}
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h1 className="flex items-center gap-2.5 text-xl font-semibold text-cp-ink">
        {status && <StatusDot status={status} />}
        {title}
      </h1>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  </div>
);

export const FieldLabel = ({
  children,
  required = false,
  htmlFor,
}: {
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}) => {
  const Tag = htmlFor ? "label" : "span";
  return (
    <Tag className="cp-label" htmlFor={htmlFor}>
      {children}
      {required && <span className="req">*</span>}
    </Tag>
  );
};

const fieldId = (label: string) =>
  `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export const TextField = ({
  label,
  value,
  required = false,
}: {
  label: string;
  value: string;
  required?: boolean;
}) => (
  <div className="space-y-1.5">
    <FieldLabel required={required} htmlFor={fieldId(label)}>
      {label}
    </FieldLabel>
    <input id={fieldId(label)} className="cp-input" value={value} readOnly />
  </div>
);

export const TextareaField = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="space-y-1.5">
    <FieldLabel>{label}</FieldLabel>
    <div className="cp-input min-h-16 text-cp-mute">{value}</div>
  </div>
);

export const RteField = ({
  label,
  paragraphs,
}: {
  label: string;
  paragraphs: string[];
}) => (
  <div className="space-y-1.5">
    <FieldLabel>{label}</FieldLabel>
    <div className="space-y-3 rounded-lg border border-cp-line bg-cp-surface p-4 text-sm leading-relaxed text-cp-mute">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
    </div>
  </div>
);

export const ListField = ({
  label,
  items,
}: {
  label: string;
  items: string[];
}) => (
  <div className="space-y-1.5">
    <FieldLabel>{label}</FieldLabel>
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="cp-item-row">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const DateField = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="space-y-1.5">
    <FieldLabel>{label}</FieldLabel>
    <div className="cp-input flex items-center gap-2.5">
      <Calendar className="size-4 shrink-0 text-cp-faint" strokeWidth={1.75} />
      <span className="flex-1">{value}</span>
    </div>
  </div>
);

export const RelatedField = ({
  label,
  items,
}: {
  label: string;
  items: { title: string; href: string; status?: EntryStatus }[];
}) => (
  <div className="space-y-1.5">
    <FieldLabel>{label}</FieldLabel>
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="cp-item-row transition-colors hover:text-cp-link"
          >
            <StatusDot status={item.status ?? "completed"} />
            <span className="flex-1 truncate">{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const SideCard = ({ children }: { children: React.ReactNode }) => (
  <div className="cp-card space-y-4 p-4">{children}</div>
);

export const StatusCard = ({ status }: { status: EntryStatus }) => (
  <SideCard>
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-cp-ink">Status</span>
      <StatusBadge status={status} />
    </div>
  </SideCard>
);
