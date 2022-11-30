ghilimele = '"'
txt = f"$ echo {ghilimele}Hello!{ghilimele}"
acolada = ["{", "}"]
helper = ""
for i in range(len(txt)):
    helper = helper+txt[i]
    print(f"if(nr == {i}){acolada[0]}return '{helper}';{acolada[1]}")
    helpr = i
# for i in range(len(txt)):
#     helper2 = ""
#     for o in range(i):
#         helper2 = helper2 + txt[o]
#     print(f"if(nr == {i+len(txt)}){acolada[0]}return '{helper2}';{acolada[1]}")
i = helpr
arr = list()
while (i < (len(txt)*2-1)):
    helper2 = ""
    for o in range(i-helpr):
        helper2 = helper2 + txt[o]
    i+=1
    arr.append(helper2)
    # print(arr)
    # print(helper)
    # print(f"if(nr == {i}){acolada[0]}return '{helper2}';{acolada[1]}")
arr = arr[::-1]
# print(arr)
i = helpr
for o in arr:
    # print(o)
    i+=1
    print(f"if(nr == {i}){acolada[0]}return '{o}';{acolada[1]}")
print(f"var termNum = nr % {len(txt)*2};")
