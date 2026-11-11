import { describe, expect, it } from 'vitest';
import { validateApiBaseUrl } from './api-base-url';

describe('API base URL', () => {
  it('accepts and normalizes staging and production URLs', () => {
    expect(validateApiBaseUrl('https://stage.example.invalid/api/')).toBe(
      'https://stage.example.invalid/api',
    );
    expect(validateApiBaseUrl('https://prod.example.invalid')).toBe(
      'https://prod.example.invalid',
    );
    expect(validateApiBaseUrl('http://localhost:8080/')).toBe(
      'http://localhost:8080',
    );
  });

  it.each([
    undefined,
    '',
    ' relative/path',
    '/api',
    'ftp://example.com',
    'https://user:pass@example.com',
    'https://example.com/?token=x',
    'https://example.com/#fragment',
  ])('rejects invalid or unsafe values', (value) => {
    expect(() => validateApiBaseUrl(value)).toThrow(/NEXT_PUBLIC_API_BASE_URL/);
  });
});
