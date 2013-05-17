# Plugins
# =======

# Plugin:   Stitch CSS
# URL:      http://stitchcss.com/
# Github:   https://github.com/anthonyshort/stitch-css
# require   'stitch'

# Config
# ======

project_type		  = :stand_alone
environment			  = :development		#:production
preferred_syntax	= :scss
http_path			    = "../"
css_dir				    = "styles"
sass_dir			    = "styles/scss"
images_dir			  = "assets"
javascripts_dir 	= "scripts"
relative_assets 	= true

# Disable query vars image.png?1234 when using asset helpers, e.g., image-url()
asset_cache_buster  :none

output_style = (environment == :production) ? :compressed : :expanded

line_comments = false
