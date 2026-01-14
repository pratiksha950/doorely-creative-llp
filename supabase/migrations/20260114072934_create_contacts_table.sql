/*
  # Create contacts table for form submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `name` (text) - Full name of the person submitting the form
      - `email` (text) - Email address of the contact
      - `phone` (text, nullable) - Optional phone number
      - `message` (text) - Message content from the contact form
      - `created_at` (timestamptz) - Timestamp when the contact was submitted
      - `status` (text) - Status of the contact (new, contacted, resolved)
  
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for public insert (anyone can submit contact form)
    - Add policy for authenticated admin users to read contacts (future admin panel)

  3. Important Notes
    - Contact form submissions are publicly accessible for submission
    - Reading contact data requires authentication (for future admin features)
    - All submissions are timestamped automatically
    - Default status is 'new' for all submissions
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);
