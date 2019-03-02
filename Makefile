PROJECT_ID := "united-storm-223507"

.PHONY: build
build:
	yarn build
serve: build
	firebase serve --project $(PROJECT_ID)
deploy: build
	firebase deploy --project $(PROJECT_ID)
