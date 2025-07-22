n1=input("Enter a number:")
n2=input("Enter second number:")
op=input("enter the operator:")
num1 = int(n1)
num2 = int(n2)
try:
    num1 = int(n1)
    num2 = int(n2)
    if not n1 and n2.isnumeric():
        raise ValueError("Enter a valid number")
    else:
        if op == '+':
            res=num1+num2
        if op == '-':
            res=num1-num2
        if op =='*':
            res=num1*num2
        if op =='/':
            res=num1/num2
        print("the result is:",res)
except ValueError as e:
    print(e)
