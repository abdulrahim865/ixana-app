/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ixana-blog.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/wi-r.html",
        destination: "/our-technology",
        permanent: true,
      },
      {
        source: "/applications.html",
        destination: "/applications",
        permanent: true,
      },
      {
        source: "/products.html",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/faq.html",
        destination: "/our-technology#faqs",
        permanent: true,
      },
      {
        source: "/blog.html",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/company.html",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/blogs/Wi-R_Technology_White_Paper.html",
        destination: "/blog/wi-r-technology-white-paper",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
