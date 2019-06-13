SITE_ENDPOINT := "https://photo.phoooutty.com"

.PHONY: build
build/dev:
	yarn build
build/prd:
	REACT_APP_SITE_ENDPOINT=$(SITE_ENDPOINT) yarn build
serve: build/dev
	DEBUG=* firebase serve --only hosting,functions
deploy: build/prd
	firebase deploy
deploy/functions:
	firebase deploy --only functions
deploy/ci: build/prd
	firebase deploy --token ${FIREBASE_TOKEN}
