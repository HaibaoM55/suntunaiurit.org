import os
msg = input("Mesaj: ")
os.system("git add *")
os.system(f"git commit -m {msg}")
os.system("git push")