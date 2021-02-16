# for x in range(1, 6):
#     while x < 6:
#         print(x)
#         break
#     x += 1
# N^P

# x = 1
# P = 30
# N = 40
# while P > 0:
#     print('P: ', P)
#     print('N: ', N)
#     x = x * N 
#     P = P - 1
#     print('x: ', x)
    
# print(x)

# P = 4
# # N = 3
# x = 4
# prefix = 1
# while P!= 1:
#     if P%2==0:
#         x=x*x
#     if P%2!=0:
#         prefix = prefix*x
#         x=x*x
#     P=P/2    
#     print('P: ', P)
#     print('prefix', prefix)
#     # print('N: ', N)
#     print('x: ', x)
    
# print(x*prefix)


P = 40
# N = 3
x = 6
prefix = 1
while P!= 1:
    if P%2==0:
        x=x*x
    if P%2!=0:
        prefix = prefix*x
        x=x*x
    P=P/2    
    print('P: ', P)
    # print('prefix', prefix)
    # print('N: ', N)
    print('x: ', x)
    

print('answer', x*prefix)
print('check', 6**40)