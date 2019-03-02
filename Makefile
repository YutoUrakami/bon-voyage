PROJECT_ID := "united-storm-223507"
SITE_ENDPOINT := "https://photo.phoooutty.com"

.PHONY: build
build/dev:
	yarn build
build/prd:
	REACT_APP_BV_ENDPOINT=$(SITE_ENDPOINT)  yarn build
serve: build/dev
	firebase serve --project $(PROJECT_ID)
deploy: build/prd
	firebase deploy --project $(PROJECT_ID)
deploy/functions:
	firebase deploy --project $(PROJECT_ID) --only functions
