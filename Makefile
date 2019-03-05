SITE_ENDPOINT := "https://photo.phoooutty.com"

.PHONY: build
build/dev:
	yarn build
build/prd:
	REACT_APP_BV_ENDPOINT=$(SITE_ENDPOINT) yarn build
serve: build/dev
	firebase serve
deploy: build/prd
	firebase deploy
deploy/functions:
	firebase deploy --only functions
