# react fibre algorithm is used BTS to update the virtual dom
- features-> to abort,pause,reuse work and abiltiy to assign priority.
- hydration->
- reconcilliation-> is basically an algorithm which is used by react to differentiate b/w two trees(actual Dom and the virtual dom which is created by CreateRoot method) to determine which parts has to be changed.
- setState -> cause re render
# diffing of lists is performed using keys
# in UI, it is not necessary for every update to be applied immediately as it can cause frame drops
# different types of updates have different priority.
