/** Validate the public API endpoint without including its value in errors. */
export function validateApiBaseUrl(value: string | undefined): string {
  if (!value || value !== value.trim()) {
    throw new Error(
      'NEXT_PUBLIC_API_BASE_URL must be a valid absolute HTTP(S) URL.',
    );
  }

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(
      'NEXT_PUBLIC_API_BASE_URL must be a valid absolute HTTP(S) URL.',
    );
  }

  if (
    !['http:', 'https:'].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      'NEXT_PUBLIC_API_BASE_URL must be an HTTP(S) URL without credentials, query, or fragment.',
    );
  }

  return value.replace(/\/+$/, '');
}

/** Public and fixed at build time; safe to import from client or server code. */
export function getApiBaseUrl(): string {
  return validateApiBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL);
}
