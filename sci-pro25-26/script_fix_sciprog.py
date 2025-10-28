import os 

path = "_build/html/"
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

print("fix _static and _images on html files")
# rename folder

if os.path.exists("_build/html/_images"):
    os.rename("_build/html/_images", "_build/html/images")
if os.path.exists("_build/html/_static"):
    os.rename("_build/html/_static", "_build/html/static")
    
print("remame folder _static and _images")
