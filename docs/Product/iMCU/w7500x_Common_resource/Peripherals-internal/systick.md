---
id: systick
title: System tick timer
date: 2020-04-03
---

## Introduction

system tick timer(SysTick) is part of the ARM Cortex-M0 core

## Features

Simple 24bit timer.
Clocked internally by the system clock

## Functional description

The SysTick timer is an integral part of Cortex-M0. The SysTick timer is intended to generated a fixed 10 millisecond interrupt for use by an operating system or other system management software.
Since the SysTick timer is a part of the Cortex-M0, it facilitates porting of software by
providing a standard timer that is available on Cortex-M0 based devices. The SysTick
timer can be used for : 
 
*	An RTOS tick timer which fires at a programmable rate (for example 100 Hz) and invokes a SysTick routine.
*	A high-speed alarm timer using the core clock.
*	A simple counter. Software can use this to measure time to completion and time used.
*	An internal clock source control based on missing/meeting durations. The COUNTFLAG bit-field in the control and status register can be used to determine if an action completed within a set duration, as part of a dynamic clock management control loop.



------------------------------

## Peripheral_Examples
- [Delay example](delay.md)
