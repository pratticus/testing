{exp:channel:entries channel="blog"}
{
  "@context": "http://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{page_url}",
    "url": "{page_url}"
  },
  "headline": "{title}",
  "image": {
    "@type": "ImageObject",
    "url": "{blog_image_grid}{blog_image_grid:blog_image}{/blog_image_grid}",
    "height": 1000,
    "width": 1000
  },
  "datePublished": "{entry_date format='%Y-%m-%dT%H:%i:%s%P'}",
  "dateModified": "{edit_date format='%Y-%m-%dT%H:%i:%s%P'}",
  "author": {
    "@type": "Person",
    "name": "{blog_authors}{blog_authors:title}{/blog_authors}"
  },
   "publisher": {
    "@type": "Organization",
    "name": "Vivid Learning Systems",
    "logo": {
      "@type": "ImageObject",
      "url": "https://vividlearningsystems.com/assets/img/structured-data-logo.png",
      "width": 600,
      "height": 60
    }
  }
}
{/exp:channel:entries}