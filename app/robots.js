export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.tasdi.foo/sitemap.xml",
  };
}
