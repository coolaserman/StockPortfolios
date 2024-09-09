import time

def my_job():
    # function to run as a job
    print("This is my job")

while True:
    my_job()
    time.sleep(60) # run the job every 60 seconds