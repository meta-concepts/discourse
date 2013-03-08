#!/bin/sh
### BEGIN INIT INFO
# Provides: thin
# Required-Start: $local_fs $remote_fs
# Required-Stop: $local_fs $remote_fs
# Default-Start: 2 3 4 5
# Default-Stop: S 0 1 6
# Short-Description: thin initscript
# Description: thin
### END INIT INFO
 
# Original author: Forrest Robertson
 
# Do NOT "set -e"
 
DAEMON=/home/admin/.rvm/gems/ruby-1.9.3-p392/bin/thin
SCRIPT_NAME=/etc/init.d/thin
CONFIG_PATH=/etc/thin
 
# Exit if the package is not installed
[ -x "$DAEMON" ] || exit 0
 
case "$1" in
start)
sudo su -c "source /home/admin/.rvm/environments/default ; $DAEMON start --all $CONFIG_PATH" admin
;;
stop)
sudo su -c "source /home/admin/.rvm/environments/default; $DAEMON stop --all $CONFIG_PATH" admin
;;
restart)
sudo su -c "source /home/admin/.rvm/environments/default; $DAEMON restart --all $CONFIG_PATH" admin
;;
*)
echo "Usage: $SCRIPT_NAME {start|stop|restart}" >&2
exit 3
;;
esac