console.log('server run');

app.use(register);

const PORT = 5000;

app.applymiddleware(auth);
app.applymiddleware(oAuth);

app.listen(PORT);
