{
	"blog": { 
		"entries": [
			{exp:channel:entries channel="blog" dynamic="off" limit="20" orderby="random" sort="asc" sticky="no"}
			{
				"title": "{title}",
				"thumb": "{site_url}{blog_image_grid}{blog_image_grid:blog_image }{/blog_image_grid}"
			}{if count == total_results}{if:else},{/if}
			{/exp:channel:entries}
		]
	}	
}