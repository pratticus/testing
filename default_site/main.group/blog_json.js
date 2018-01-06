{
	"version": "https://jsonfeed.org/version/1",
	"title": "Vivid Learning Systems Blog",
	"home_page_url": "https://vividlearningsystems.com",
	"feed_url": "https://vividlearningsystems.com/main/blog_json",
	"favicon": "https://vividlearningsystems.com/assets/img/blog_favicon.jpeg",
	"icon": "https://vividlearningsystems.com/assets/img/blog_icon.jpeg",
	"items": [
	{exp:channel:entries channel="blog" limit="6500" dynamic="off" orderby="date" sticky="no"}
		{
			"id": "{entry_id}",
			"title": "",
			"image": "{site_url}{blog_image_grid}{blog_image_grid:blog_image}{/blog_image_grid}",
			"banner_image": "{site_url}{blog_image_grid}{blog_image_grid:blog_image}{/blog_image_grid}",
			"content_text": "{exp:tagstripper:stripAllTags stripLineBreaks='true' escapeHTMLchars='true' stringNbsp='true'}{blog_content}{/exp:tagstripper:stripAllTags}",
			"url": "{page_url}",
			"date_published": "{gmt_entry_date format="%Y-%m-%dT%H:%i:%s%Q"}"
		}{if count == total_results}{if:else},{/if}
    {/exp:channel:entries}
	]
}