import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Basic health check
    const healthCheck = {
      status: 'OK',
      timestamp: new Date().toISOString(),
      service: 'Creator Labs',
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
    };

    return NextResponse.json(healthCheck, { status: 200 });
  } catch (error) {
    const errorResponse = {
      status: 'ERROR',
      timestamp: new Date().toISOString(),
      error: 'Health check failed',
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}