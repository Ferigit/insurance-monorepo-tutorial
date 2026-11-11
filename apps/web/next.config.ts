import type { NextConfig } from 'next';
import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from 'next/constants';
import { validateApiBaseUrl } from './src/config/api-base-url';

const config: NextConfig = { transpilePackages: ['@tutorial/ui'] };

export default function nextConfig(phase: string): NextConfig {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    validateApiBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL);
  }
  return config;
}
