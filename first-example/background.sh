#!/bin/bash

set -x
curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh && sh nodesource_setup.sh && sudo apt install nodejs -y && rm -rf nodesource_setup.sh
cat ~/.bashrc .dh-bashrc >> ~/.bashrc
source ~/.bashrc

rm -rf nodesource_setup.sh .dh-bashrc
echo done > /tmp/background0


