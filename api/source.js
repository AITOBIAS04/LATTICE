import { jsonResponse } from './_json-response.js';

export const config = { runtime: 'edge' };

// AGPL-3.0 section 13 source offer. This deployment runs a modified fork of
// World Monitor (Copyright (C) 2024-2026 Elie Habib); NOTICE.md lists the
// modifications. The Corresponding Source is the fork at the deployed commit.
const REPO = 'https://github.com/AITOBIAS04/LATTICE';

export default function handler() {
  const commit = process.env.VERCEL_GIT_COMMIT_SHA || null;
  return jsonResponse({
    notice: 'Modified version of World Monitor, licensed under the GNU AGPL v3. Source code for this deployment is available at no charge.',
    source: commit ? `${REPO}/tree/${commit}` : REPO,
    commit,
    license: `${REPO}/blob/${commit || 'main'}/LICENSE`,
    notices: `${REPO}/blob/${commit || 'main'}/NOTICE.md`,
    upstream: 'https://github.com/koala73/worldmonitor',
  }, 200, {
    'Cache-Control': 'public, s-maxage=300',
    'Access-Control-Allow-Origin': '*',
  });
}
