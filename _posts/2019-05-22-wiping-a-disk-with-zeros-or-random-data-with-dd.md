---
layout: post
title: Wiping a disk with zeros or random data with `dd`
date: '2019-05-22T14:02:35-04:00'
tags:
- linux
---
Wiping a disk with zeros:

    dd if=/dev/zero of=/dev/sdX bs=8M

Wiping a disk with random data:

    dd if=/dev/urandom of=/dev/sdX bs=8M

_Note: `X` in `sdX` needs to be replaced with the drive to be wiped. The usual case is `a`. Another thing to note is that `bs` should be close to the disk cache size for optimial performance._

To determine optimial speed, run:

    dd if=/dev/urandom of=zero bs=512K; rm zero;
    dd if=/dev/urandom of=zero bs=1M; rm zero;
    dd if=/dev/urandom of=zero bs=8M; rm zero;
    dd if=/dev/urandom of=zero bs=32M; rm zero;
    dd if=/dev/urandom of=zero bs=1G; rm zero;

Add as many different block size (`bs`) variants to test for optimial speeds.
