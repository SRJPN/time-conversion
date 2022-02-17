# Time Conversion

Given a time in -hour AM/PM format, convert it to military (24-hour) time.

**Note:** 
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.


**Example**

Input
```
12:01:00PM
```
Output
```
12:01:00
```

Input
``` shell
12:01:00AM
```
Output
``` shell
00:01:00
```


## Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

A single string  that represents a time in 12-hour clock format (i.e.: `hh:mm:ssAM`  or `hh:mm:ssPM` ).

## Constraints

All input times are valid

Sample Input 0
``` shell
07:05:45PM
```
Sample Output 0
``` shell
19:05:45
```