/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://smartlearning.ug',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/get-started'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://smartlearning.ug/sitemap.xml',
    ],
  },
}
