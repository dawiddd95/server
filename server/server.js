console.log('server run');

const PORT = 5000;

app.applymiddleware(auth);

app.listen(PORT);
