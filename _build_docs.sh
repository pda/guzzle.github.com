#!/bin/bash

push=$1

if [ ! -d _docs ]; then
  git clone git@github.com:guzzle/guzzle-docs.git _docs && cd _docs
else
  cd _docs && git reset --hard && git pull origin master
fi

sed -i '' 's,build/$(LANG),../,g' Makefile
sed -i '' 's,$(SPHINXBUILD) -b html $(ALLSPHINXOPTS) $(BUILDDIR)/html,$(SPHINXBUILD) -b html $(ALLSPHINXOPTS) $(BUILDDIR),g' Makefile
make html GA=1

cd ..
apigen --source ../guzzle/src --destination api --title Guzzle --google-analytics UA-22752917-1 --download no --source-code no

if [ "$push" != "" ]; then
  git add -A && git commit -m 'Updating' && git push origin master
fi
