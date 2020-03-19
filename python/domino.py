c = 0 

def dominoPrinter(str, buffer):
  if buffer >= 1:
    dominoPrinter(str + "1", buffer - 1)
  if buffer >= 2: 
    dominoPrinter(str + "2", buffer - 2)
  if buffer == 0:
    print(str)
    global c
    c += 1

dominoPrinter("", 5)
print("number of combinations:", c)