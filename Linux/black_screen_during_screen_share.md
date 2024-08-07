# Black screen during screen share

If, during an online meeting, whenever you share the screen, it always appears as a black screen. Try following these steps:

1. `sudo vim /etc/gdm3/custom.conf`
2. Uncomment the line `#WaylandEnable=false`
3. Save the file and restart the computer.
