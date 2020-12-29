console.log('server run');

app.use(register);

const PORT = 5000;

app.applymiddleware(auth);

app.listen(PORT);
