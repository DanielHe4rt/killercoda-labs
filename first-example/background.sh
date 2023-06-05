set -x
curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh && sh nodesource_setup.sh && sudo apt install nodejs -y
echo done > /tmp/background0