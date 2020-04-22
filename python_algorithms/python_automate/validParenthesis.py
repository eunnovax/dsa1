
def isValid(s):
    if(len(s) % 2 != 0):
        return False
    stack = []
    for c in s:
        if(c == '(' or c == '{' or c == '['):
            stack.append(c)
        elif(c == ')' and len(stack) != 0 and stack[-1] == '('):
            stack.pop()
        elif(c == '}' and len(stack) != 0 and stack[-1] == '{'):
            stack.pop()
        elif(c == ']' and len(stack) != 0 and stack[-1] == '['):
            stack.pop()
    return len(stack) == 0

st = "{{}}"
validPar = isValid(st)
print(validPar)
