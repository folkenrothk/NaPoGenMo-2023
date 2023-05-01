#!/usr/bin/python

# remixed from "I AM THAT I AM" by Nick Montfort, 2014

import string

def permutate(elems):
    if len(elems) == 0:
        yield elems
    else:
        for result in permutate(elems[1:]):
            for i in range(len(elems)):
                yield result[:i] + elems[0:1] + result[i:]

test_str = str(list(permutate('user'))).replace("'", '').replace(",",'').replace("]",'').replace("[",'')

f = open("../../content/work00.txt", "x")
f.write(test_str)
