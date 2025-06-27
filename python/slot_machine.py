def deposit():
    while True:
        amount = input("Please enter the deposit amount $$")
        if amount.isdigit():
            amount = float(amount)
            if amount > 0:
                break
            else:
                print("Please enter amount greater than 0")
        else:
            print("Please enter a number")
    return amount
deposit()
