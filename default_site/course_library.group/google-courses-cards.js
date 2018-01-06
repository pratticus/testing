{exp:channel:entries channel="osha-courses"}
{
  "@context": "http://schema.org",
  "@type": "Course",
  "name": "{title}",
  "description": "A description",
  "provider": {
    "@type": "Organization",
    "name": "Vivid Learning Systems",
    "sameAs": "{page_url}"
  }
}
{/exp:channel:entries}



{exp:channel:entries}{course_meta}{
  "@context": "http://schema.org",
  "@type": "Course",
  "name": "{course_meta:page_title}",
  "description": "{course_meta:description}",
  "url": "http://mshatrainingonline.com{page_uri}",
  "provider": {
    "@type": "Organization",
    "name": "Vivid Learning Systems",
    "sameAs": "https://vividlearningsystems.com"
  }
}{/course_meta}{/exp:channel:entries}