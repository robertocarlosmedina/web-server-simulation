from threading import Thread
import sys
COUNTDOWN = 5
class Th(Thread):
        def __init__ (self, num):
                sys.stdout.write("Making thread number " + str(num) + "n")
                sys.stdout.flush()
                Thread.__init__(self)
                self.num = num
                self.countdown = COUNTDO
       def run(self):
                while (self.countdown):
                        sys.stdout.write("Thread " + str(self.num) +" (" + str(self.countdown) + ")n")
                        sys.stdout.flush()
                        self.countdown -=
for thread_number in range (5):
        thread = Th(thread_number)
        thread.start()