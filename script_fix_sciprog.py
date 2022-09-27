import os 

path = "sci-pro22-23/"
for i in os.listdir(path):
    if (i[-4:] == "html"):
        fin = open(path+i, "rt")
        #read file contents to string
        data = fin.read()
        #replace all occurrences of the required string
        data = data.replace('_static/', 'static/')
        data = data.replace('_images/', 'images/')
        #close the input file
        fin.close()
        #open the input file in write mode
        fin = open(path+i, "wt")
        #overrite the input file with the resulting data
        fin.write(data)
        #close the file
        fin.close()


# rename folder

if os.path.exists("sci-pro22-23/_images"):
    os.rename("sci-pro22-23/_images", "sci-pro22-23/images")
if os.path.exists("sci-pro22-23/_static"):
    os.rename("sci-pro22-23/_static", "sci-pro22-23/static")