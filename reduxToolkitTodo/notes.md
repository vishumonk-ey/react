- reducers ke case me jo bhi method hai unhe state aur action ka access milta hai
- in case of redux we have to give the definition directly but in case of context API we were only declaring the function and later on we were defining the method with the same name

- sabse phle store create kiya fir slice create  kiya jiske andar initial state diya jayega , name diya jayega and reducers ka list diya jayega.. reducers are nothing but methods . 
fir vo reducers ko export krke hum apne store me bhi access denge , store khaali reducers me diye gaye functions se hi update hoga .
