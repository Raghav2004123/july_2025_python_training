a = input("Enter the number:")
try :

    if not a.isnumeric():
       raise ValueError("its not a number")
    else:
        print(a," is number")
except ValueError as e:
    print(e)



        
        