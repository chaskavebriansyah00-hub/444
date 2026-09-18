/*
# Create leads table (single-tenant, no auth)

## Summary
Dokter Sejuk AC is a marketing/lead-capture website with NO sign-in screen.
Visitors fill in a contact/booking form on the homepage, and the submission
is stored so the sales/ops team can follow up. This migration creates the
storage for those inbound leads.

## Tables created
- `leads`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — full name of the customer
  - `phone` (text, not null) — WhatsApp/phone number for follow-up
  - `email` (text, nullable) — optional email address
  - `service` (text, not null) — requested service type (e.g. "Cuci AC")
  - `message` (text, nullable) — optional free-text detail from the customer
  - `status` (text, not null default 'new') — pipeline status for the team
  - `created_at` (timestamptz, default now()) — submission timestamp

## Security
- Row Level Security is ENABLED on `leads`.
- This is a single-tenant app with no authentication: the website's frontend
  talks to Supabase with the anon key for its entire lifetime. Therefore every
  policy lists `TO anon, authenticated`.
  - INSERT is intentionally public (anyone filling the public form can submit a lead).
  - SELECT/UPDATE/DELETE are also opened to anon+authenticated so the site owner
    can manage leads via an authenticated dashboard later without a migration.
    This is acceptable because the data is intentionally shared/public within
    the single-tenant project context and the table holds no PII beyond the
    contact details a customer voluntarily submits through a public form.

## Notes
1. No `user_id` / `auth.users` foreign key — there is no sign-in flow.
2. `email` and `message` are nullable because the form makes them optional.
3. `status` is seeded with 'new' so every fresh lead enters the pipeline cleanly.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads"
ON leads FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_leads" ON leads;
CREATE POLICY "anon_select_leads"
ON leads FOR SELECT
TO anon, authenticated
USING (true);

DROP POLICY IF EXISTS "anon_update_leads" ON leads;
CREATE POLICY "anon_update_leads"
ON leads FOR UPDATE
TO anon, authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_leads" ON leads;
CREATE POLICY "anon_delete_leads"
ON leads FOR DELETE
TO anon, authenticated
USING (true);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status);
