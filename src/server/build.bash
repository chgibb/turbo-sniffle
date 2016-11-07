#Remove previous bundle
rm dist/*.js
printf "Building server\n"
#Build all typescript files
./node_modules/.bin/tsc
if [ $? != 0 ]; then
    exit 1
fi
printf "Bundling server\n"
#Bundle all first party and third party code into one file
./node_modules/.bin/browserify index.js --node -o dist/dist.js
if [ $? != 0 ]; then
    exit 1
fi
#Remove compiled typescript artifacts
rm *.js
cd req
find . -type f -name '*.js' -delete


