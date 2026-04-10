/**
 * Demo AFH / rental records — synthetic data only. Replace with your API.
 * Educational use; verify licensing and PII handling in production.
 */

export type CommChannel = "email" | "sms" | "portal" | "call";

export type CommunicationEntry = {
  id: string;
  at: string; // ISO date-time
  channel: CommChannel;
  subject?: string;
  summary: string;
};

export type RentalProperty = {
  id: string;
  propertyName: string;
  propertyAddress: string;
  /** Adult Family Home licensed bed capacity (or other licensed capacity). */
  afhLicensedBeds: 6 | 8 | number;
  tenantName: string;
  email: string;
  phone: string;
  website: string;
  rentStart: string; // YYYY-MM-DD
  rentExpiration: string; // YYYY-MM-DD
  rentAmount: number;
  rentCurrency: string;
  /** Human-readable, e.g. "1st & 15th — ACH" */
  rentSchedule: string;
  communications: CommunicationEntry[];
};

export const rentalProperties: RentalProperty[] = [
  {
    id: "prop-aurora",
    propertyName: "Aurora View AFH",
    propertyAddress: "18402 Aurora Ave N, Shoreline, WA 98133",
    afhLicensedBeds: 6,
    tenantName: "Jordan Lee (provider)",
    email: "j.lee.aurora@example.com",
    phone: "+1 (206) 555-0142",
    website: "https://aurora-afh.example.com",
    rentStart: "2024-03-01",
    rentExpiration: "2027-02-28",
    rentAmount: 4850,
    rentCurrency: "USD",
    rentSchedule: "Monthly — 1st of month · ACH (3-day lead)",
    communications: [
      {
        id: "c1",
        at: "2026-04-01T09:12:00",
        channel: "email",
        subject: "April rent receipt",
        summary: "Auto-receipt for $4,850; balance $0.",
      },
      {
        id: "c2",
        at: "2026-04-03T14:00:00",
        channel: "sms",
        summary: "T-3 rent reminder sent; delivery confirmed.",
      },
      {
        id: "c3",
        at: "2026-03-28T11:20:00",
        channel: "portal",
        summary: "Tenant uploaded insurance renewal PDF.",
      },
    ],
  },
  {
    id: "prop-greenlake",
    propertyName: "Green Lake Care Home",
    propertyAddress: "7200 E Green Lake Dr N, Seattle, WA 98115",
    afhLicensedBeds: 8,
    tenantName: "Sam Rivera (provider)",
    email: "ops@greenlake-afh.example.com",
    phone: "+1 (206) 555-0199",
    website: "https://greenlake-care.example.com",
    rentStart: "2023-11-01",
    rentExpiration: "2026-10-31",
    rentAmount: 6200,
    rentCurrency: "USD",
    rentSchedule: "1st & 15th split — card on file",
    communications: [
      {
        id: "c4",
        at: "2026-04-08T10:00:00",
        channel: "call",
        summary: "Collections callback scheduled re: partial payment plan.",
      },
      {
        id: "c5",
        at: "2026-04-05T08:45:00",
        channel: "email",
        subject: "Inspection window",
        summary: "WSDOH-style walkthrough confirmed for Apr 5 block.",
      },
    ],
  },
  {
    id: "prop-redmond",
    propertyName: "Redmond Ridge AFH",
    propertyAddress: "8921 166th Ave NE, Redmond, WA 98052",
    afhLicensedBeds: 6,
    tenantName: "Alex Kim (provider)",
    email: "contact@redmondridge-afh.example.com",
    phone: "+1 (425) 555-0108",
    website: "https://redmondridge-afh.example.com",
    rentStart: "2025-01-15",
    rentExpiration: "2028-01-14",
    rentAmount: 5100,
    rentCurrency: "USD",
    rentSchedule: "Monthly — 1st · ACH",
    communications: [
      {
        id: "c6",
        at: "2026-04-12T16:30:00",
        channel: "portal",
        summary: "Move-in checklist signed; keys released.",
      },
      {
        id: "c7",
        at: "2026-04-10T09:00:00",
        channel: "email",
        subject: "Renewal options",
        summary: "Sent tier-1 renewal incentive PDF.",
      },
    ],
  },
  {
    id: "prop-kirkland",
    propertyName: "Kirkland Harbor Homes",
    propertyAddress: "113 Lake St S, Kirkland, WA 98033",
    afhLicensedBeds: 8,
    tenantName: "Morgan Patel (provider)",
    email: "m.patel@kirklandharbor.example.com",
    phone: "+1 (425) 555-0177",
    website: "https://kirklandharbor.example.com",
    rentStart: "2022-06-01",
    rentExpiration: "2027-05-31",
    rentAmount: 5950,
    rentCurrency: "USD",
    rentSchedule: "Monthly — 1st · ACH + email receipt",
    communications: [
      {
        id: "c8",
        at: "2026-04-14T12:00:00",
        channel: "email",
        subject: "Owner statement Q1",
        summary: "Distribution summary attached; no reply required.",
      },
    ],
  },
];

export function getPropertyById(id: string): RentalProperty | undefined {
  return rentalProperties.find((p) => p.id === id);
}

export function getPropertiesByIds(ids: string[]): RentalProperty[] {
  const set = new Set(ids);
  return rentalProperties.filter((p) => set.has(p.id));
}
