console.log('server run');

app.use(register);

const PORT = 5000;

app.applymiddleware(auth);
app.applymiddleware(oAuth);


if(PORT === null) throw new Exception('Server is not running');

app.listen(PORT);
