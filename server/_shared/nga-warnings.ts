/**
 * NGA MSI `broadcast-warn` responses wrap the list as `{"broadcast-warn": [...]}`
 * (hyphenated key). Reading `broadcast_warn` or `warnings` instead yields an
 * empty list on every fetch, which is how navigational warnings and the
 * cable-health NGA input went silent.
 */
export function ngaWarningRecords<T = any>(data: unknown): T[] {
  if (Array.isArray(data)) return data as T[];
  if (!data || typeof data !== 'object') return [];
  const list = (data as Record<string, unknown>)['broadcast-warn'];
  return Array.isArray(list) ? (list as T[]) : [];
}
