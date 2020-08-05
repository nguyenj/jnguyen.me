---
layout: post
title: Building Vim from source
date: '2020-08-05T09:09:57-04:00'
tags: []
tumblr_url: https://nguyeness.tumblr.com/post/625615041637613568/building-vim-from-source
---
Get the latest ruby and python installation. At the time of this post, ruby is at v2.7 and python is at v3.8.

`shell
git clone https://github.com/vim/vim.git ~/.config/vim
cd ~/.config/vim
./configure --with-features=huge \
            --without-x \
            --enable-multibyte \
            --enable-rubyinterp=yes \
            --enable-python3interp=yes \
            --with-python3-config-dir=$(python3-config --configdir) \
            --enable-perlinterp=yes \
            --enable-luainterp=yes \
            --enable-cscope \
            --prefix=/usr/local
sudo make
sudo make install
sudo make clean`

