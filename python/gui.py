import tkinter as tk
import time
root = tk.Tk()
var=tk.IntVar()
root.geometry("800x800")
c = tk.Canvas(root ,width=800 ,height=800)
c.pack()

class Animator:
  cursor = None
  cursor_radius = 10

  current_scroll = 0

  def __init__(self):
    self.bindMousewheel()
    pass
  
  def loop(self):
    while True:
      
      self.drawCursor()
      

      root.update()
      time.sleep(.01)

  def drawCursor(self):
      r = self.cursor_radius
      x, y = self.getMouseCooridnates()
      if self.cursor:
        c.delete(self.cursor)
      self.cursor = c.create_oval(x-r,y-r,x+r,y+r, outline = 'red')


  def getMouseCooridnates(self):
    x = root.winfo_pointerx() - root.winfo_rootx()
    y = root.winfo_pointery() - root.winfo_rooty()
    return x, y 

  def bindMousewheel(self):
    # with Windows OS
    root.bind("<MouseWheel>", self.mouseWheelEvent)
    # with Linux OS
    root.bind("<Button-4>", self.mouseWheelEvent)
    root.bind("<Button-5>", self.mouseWheelEvent)

  def mouseWheelEvent(self, event):
    if event.num == 5 or event.delta == -120:
        self.cursor_radius = max(self.cursor_radius - 1, 0)
    if event.num == 4 or event.delta == 120:
        self.cursor_radius += 1
 

animator = Animator()
animator.loop()




