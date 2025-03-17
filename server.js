app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());

// app.use("/api/usuarios", usuarioRoutes);
// app.use("/api/auth", authRoutes);

const PORT = process.env.DB_PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});