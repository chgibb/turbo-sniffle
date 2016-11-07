set -e
#Remove previous bundle
rm dist/*.js
printf "Building server\n"
#Build all typescript files
./node_modules/.bin/tsc
printf "Bundling server\n"
#Bundle all first party and third party code into one file
./node_modules/.bin/browserify index.js --node -o dist/dist.js
#Remove compiled typescript artifacts
rm *.js
cd req
find . -type f -name '*.js' -delete


