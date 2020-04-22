# helloFile = open('C:\\Users\\darkhan29\\Documents\\notes\\r4 notes\\hello2.txt', 'w')
# # content = helloFile.readlines()
# # print(content)
# # helloFile.close()
# helloFile.write('Hello!!!!')
# helloFile.close()
# baconFile = open('bacon.txt', 'w')
# baconFile.write('Bacon is not a vegetable.')
# baconFile.close()
# import os
# print(os.getcwd())
# baconFile = open('bacon.txt', 'a')
# baconFile.write('\n\nBacon is delicious.')
# baconFile.close()
import shelve
# shelfFile = shelve.open('mydata')
# shelfFile['cats'] = ['Zophie', 'Pooka', 'Simon', 'Fat-tail', 'Garfield']
# shelfFile.close()

# shelfFile = shelve.open('mydata')
# print(shelfFile['cats'])
# shelfFile.close()

shelfFile = shelve.open('mydata')
print(shelfFile.keys())
print(list(shelfFile.keys()))
print(list(shelfFile.values()))