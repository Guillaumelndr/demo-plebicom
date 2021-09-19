MAKEFLAGS += --no-print-directory

MAKE = make
YARN = yarn

##
## Translations
## -------
##

translations:: ## Install node dependencies
translations::
	$(YARN) translations-scan

##
## Tests
## -------
##

tests:: ## unit tests
tests::
	$(YARN) jest



##
## Project
## -------
##

init:: ## Initialization of the project
init::
	$(YARN)

reset:: ## Reset vendor, database, cache and uploads
reset:: clean assets


start:: ## Start local server
start::
	 $(YARN) dev

restart:: ## Restart local server
restart:: start #stop

clean:: ## Clean every non-versioned files
clean::
	rm -rf node_modules


check-updates:: ## Check outdated packages
check-updates::
	$(YARN) outdated

.PHONY: assets watch

.DEFAULT_GOAL := help
help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
