#!/usr/bin/env bash

#work around to fix ubuntu repo issue - http://jiflextech.blogspot.com.br/2013/09/vitualbox-pybossa.html
echo "Modifying Ubuntu repos"
sudo cp /etc/apt/sources.list /etc/apt/sources.list.backup
sudo rm /etc/apt/sources.list
sudo echo "deb http://by.archive.ubuntu.com/ubuntu/ precise main universe" > /etc/apt/sources.list
echo "End modifying Ubuntu repos"