import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DomainRedirectConfig } from "./domain.config";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostName = url.hostname;
  if (hostName !== "localhost") {
    const buildedFolderName =
      DomainRedirectConfig[hostName as keyof typeof DomainRedirectConfig];
    if (buildedFolderName) {
      url.pathname = buildedFolderName + url.pathname;
    }
  }

  return NextResponse.rewrite(url);
}
