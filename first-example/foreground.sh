echo "Waiting for the environment get ready."
while [ ! -f /tmp/background0 ]; do sleep 1; done
echo "Done! Welcome to the ScyllaDB Training."