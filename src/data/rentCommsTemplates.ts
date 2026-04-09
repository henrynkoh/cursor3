/**
 * Draft templates for education / product design — not legal advice.
 * Confirm timing, content, and escalation with qualified counsel for your jurisdiction.
 * Never paste bank tokens or full account numbers into LLM prompts.
 */

export type RentCommsStep = {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  emailSubject: string;
  emailBody: string;
  smsBody: string;
};

export const rentJourneyIntro = {
  eyebrow: "Schedules · logs · escalation hygiene",
  title: "Rent, reminders & payment journey",
  disclaimer:
    "Educational overview only. Confirm requirements with qualified counsel and licensed professionals for jurisdiction-specific landlord-tenant rules. Automated tools do not replace attorneys. Humans own legal escalation; agents may draft internal summaries only.",
};

export const rentCommsSteps: RentCommsStep[] = [
  {
    id: "schedule",
    order: 1,
    title: "Rent schedule & invoice notice",
    subtitle: "Sets expectations for due date, amount, and where to pay (timeline anchor).",
    emailSubject: "Your rent schedule for {{property_name}} — {{month_year}}",
    emailBody: `Hi {{tenant_first_name}},

Here’s your rent summary for {{unit_label}} at {{property_name}}:

• Amount due: {{amount}}
• Due date: {{due_date}}
• Pay online: {{portal_link}}

If anything looks wrong, reply to this email or call {{office_phone}} before {{due_date}}.

Thank you,
{{sender_name}}
{{property_name}}`,
    smsBody: `{{property_name}}: Rent {{amount}} due {{due_date}} for {{unit_label}}. Pay: {{portal_link}} Questions? {{office_phone}}`,
  },
  {
    id: "pre_due_friendly",
    order: 2,
    title: "Pre-due friendly reminder",
    subtitle: "Early heads-up (e.g. ~7 days before due date) — helpful tone.",
    emailSubject: "Friendly reminder: rent due {{due_date}}",
    emailBody: `Hi {{tenant_first_name}},

This is a quick reminder that your rent of {{amount}} for {{unit_label}} is due on {{due_date}}.

Pay anytime before then here: {{portal_link}}

Need help or a payment plan conversation? Contact us at {{office_phone}} — we’re happy to talk.

Thanks,
{{sender_name}}`,
    smsBody: `Reminder: rent {{amount}} due {{due_date}} ({{unit_label}}). Pay: {{portal_link}} Need help? {{office_phone}}`,
  },
  {
    id: "pre_due_nudge",
    order: 3,
    title: "Pre-due firm nudge",
    subtitle: "Closer to due date (e.g. ~3 days) — clearer, still professional.",
    emailSubject: "Rent due in 3 days — {{property_name}}",
    emailBody: `Hi {{tenant_first_name}},

Your rent of {{amount}} for {{unit_label}} is due on {{due_date}} (in 3 days).

Please submit payment here: {{portal_link}}

If you’ve already paid, thank you — you can ignore this message. If not, paying on time helps you avoid late fees where applicable.

{{sender_name}}
{{office_phone}}`,
    smsBody: `Rent {{amount}} due {{due_date}} (3 days). Pay: {{portal_link}} Already paid? Ignore. {{property_name}}`,
  },
  {
    id: "due_today",
    order: 4,
    title: "Due today (day of payment)",
    subtitle: "Immediate day-of notice — payment expected today per lease and schedule.",
    emailSubject: "Rent due today — {{due_date}}",
    emailBody: `Hi {{tenant_first_name}},

Today ({{due_date}}) is the due date for your rent of {{amount}} for {{unit_label}}.

Pay now: {{portal_link}}

If you submitted payment in the last 24 hours, it may still be processing — thank you for your patience.

Questions? {{office_phone}}

{{sender_name}}`,
    smsBody: `Due today: rent {{amount}} for {{unit_label}}. Pay: {{portal_link}} Processing delays? Call {{office_phone}}`,
  },
  {
    id: "post_due_friendly",
    order: 5,
    title: "Post-due friendly nudge (grace / day after)",
    subtitle: "First touch after missed due date if grace applies — calm, factual.",
    emailSubject: "We haven’t seen your payment yet — {{property_name}}",
    emailBody: `Hi {{tenant_first_name}},

We don’t yet show a posted payment for rent of {{amount}} that was due {{due_date}} for {{unit_label}}.

If you paid recently, it may still be clearing. Otherwise, please pay as soon as possible: {{portal_link}}

Current balance showing in your portal: {{balance_due}}

Reach us at {{office_phone}} if something’s wrong or you need help.

{{sender_name}}`,
    smsBody: `Hi {{tenant_first_name}}, we don’t see rent posted for {{due_date}} ({{amount}}). Pay: {{portal_link}} Balance: {{balance_due}}. Call {{office_phone}}`,
  },
  {
    id: "firm_reminder",
    order: 6,
    title: "Firm reminder (late)",
    subtitle: "Stronger tone after grace; reference balance and portal — still not a formal legal notice unless counsel approves.",
    emailSubject: "Important: overdue rent — action needed",
    emailBody: `Hi {{tenant_first_name}},

Your rent for {{unit_label}} remains unpaid past the due date of {{due_date}}.

Amount past due: {{balance_due}}
Pay immediately: {{portal_link}}

Late fees and other charges may apply per your lease and local rules after {{grace_end_date}}.

Contact {{office_phone}} today if there is a dispute or hardship so we can discuss next steps.

{{sender_name}}
{{property_name}}`,
    smsBody: `Overdue rent for {{unit_label}}: {{balance_due}}. Pay now: {{portal_link}} Fees may apply after {{grace_end_date}}. Call {{office_phone}}`,
  },
  {
    id: "second_notice",
    order: 7,
    title: "Second notice / escalation prep",
    subtitle: "Escalation stage before formal processes — content must be reviewed by counsel; not a substitute for statutory notices.",
    emailSubject: "Second notice: unpaid rent — contact required",
    emailBody: `Hi {{tenant_first_name}},

We’ve contacted you regarding unpaid rent for {{unit_label}}. As of {{as_of_date}}, we still do not show payment sufficient to clear the balance of {{balance_due}}.

You must contact us within {{response_hours}} hours at {{office_phone}} or pay in full at {{portal_link}}.

Failure to resolve may result in additional fees and further action consistent with your lease and applicable law. [Counsel to insert jurisdiction-specific language where required.]

{{sender_name}}
{{property_name}}`,
    smsBody: `URGENT: Unpaid rent {{balance_due}} ({{unit_label}}). Call {{office_phone}} or pay {{portal_link}} within {{response_hours}} hrs. [Legal review required.]`,
  },
  {
    id: "partial_payment",
    order: 8,
    title: "Partial payment received",
    subtitle: "Acknowledges what posted and what remains — avoids confusion on ledger.",
    emailSubject: "We received a partial payment — remaining balance",
    emailBody: `Hi {{tenant_first_name}},

We received {{partial_amount}} on {{payment_date}}. Thank you.

Remaining balance: {{balance_due}}
Due per your agreement: {{next_action_date}}

Pay the remainder here: {{portal_link}}

If this doesn’t match your records, call {{office_phone}} with your confirmation number.

{{sender_name}}`,
    smsBody: `Received {{partial_amount}} on {{payment_date}}. Remaining: {{balance_due}}. Pay: {{portal_link}} Qs: {{office_phone}}`,
  },
  {
    id: "holiday_weekend",
    order: 9,
    title: "Holiday / weekend processing note",
    subtitle: "Sets expectations when banks or ACH may delay posting (table-top case).",
    emailSubject: "Payment processing around {{holiday_or_weekend_label}}",
    emailBody: `Hi {{tenant_first_name}},

Because of {{holiday_or_weekend_label}}, bank and card payments may take longer to post.

If your rent is due {{due_date}}, please initiate payment early enough to clear by that date, or use {{portal_link}} for fastest tracking.

Posted dates in your portal are authoritative once the payment settles.

Questions? {{office_phone}}

{{sender_name}}`,
    smsBody: `Note: banks may delay posting near {{holiday_or_weekend_label}}. Initiate early so rent clears by {{due_date}}. Pay: {{portal_link}}`,
  },
];

/** Placeholder keys referenced in templates — use your merge/tag system in production. */
export const placeholderLegend = [
  "{{tenant_first_name}}",
  "{{property_name}}",
  "{{unit_label}}",
  "{{month_year}}",
  "{{due_date}}",
  "{{amount}}",
  "{{balance_due}}",
  "{{partial_amount}}",
  "{{payment_date}}",
  "{{as_of_date}}",
  "{{next_action_date}}",
  "{{portal_link}}",
  "{{office_phone}}",
  "{{sender_name}}",
  "{{grace_end_date}}",
  "{{response_hours}}",
  "{{holiday_or_weekend_label}}",
];
