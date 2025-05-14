/*
  # Create consultation requests table

  1. New Tables
    - `consultation_requests`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `service` (text, required)
      - `message` (text)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `consultation_requests` table
    - Add policy for inserting new requests
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for all users" ON consultation_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users only" ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);