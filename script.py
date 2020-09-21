import os


for i in os.listdir():
    if (i[-4:] == "html"):
        fin = open(i, "rt")
        #read file contents to string
        data = fin.read()
        #replace all occurrences of the required string
        data = data.replace('_static/', 'static/')
        #close the input file
        fin.close()
        #open the input file in write mode
        fin = open(i, "wt")
        #overrite the input file with the resulting data
        fin.write(data)
        #close the file
        fin.close()