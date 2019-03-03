PROJECT_ID := "united-storm-223507"
SITE_ENDPOINT := "https://photo.phoooutty.com"
CLOUD_FUNCTIONS_ENDPOINT := https://asia-northeast1-united-storm-223507.cloudfunctions.net

.PHONY: build
build/dev:
	yarn build
build/prd:
	REACT_APP_BV_ENDPOINT=$(SITE_ENDPOINT) \
		REACT_APP_CLOUD_FUNCTIONS_ENDPOINT=$(CLOUD_FUNCTIONS_ENDPOINT) \
		yarn build
serve: build/dev
	firebase serve --project $(PROJECT_ID)
deploy: build/prd
	firebase deploy --project $(PROJECT_ID)
deploy/functions:
	firebase deploy --project $(PROJECT_ID) --only functions
