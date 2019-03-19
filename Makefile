FUNCTIONS_ENDPOINT := "https://asia-northeast1-bon-voyage-96436.cloudfunctions.net"

.PHONY: build
build/dev:
	yarn build
build/prd:
	REACT_APP_FUNCS_ENDPOINT=$(FUNCTIONS_ENDPOINT) yarn build
serve: build/dev
	firebase serve
deploy: build/prd
	firebase deploy
deploy/functions:
	firebase deploy --only functions
deploy/ci: build/prd
	firebase deploy --token ${FIREBASE_TOKEN}
