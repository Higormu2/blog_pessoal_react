function Home() {

  return (
    <div
      style={{
        backgroundColor: "#312e81",
        display: "flex",
        justifyContent: "center"
      }}
    >
 
      <div
        style ={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          color: "white",
          maxWidth: "1280px"
        }}
      >
 
        {/* Conteúdo de texto */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "1rem",
            paddingBottom: "1rem"
          }}
        >
          <h2
          style={{
            fontSize: "3rem",
            fontWeight: "bold"
          }}
          >
            Seja Bem Vindo!
          </h2>


          <p
          style={{
            fontSize: "1.25rem",
       }}
          >
            Expresse aqui seus pensamentos
          </p>


          <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "1rem"
          }}
          >
       <div
       style={{
        borderRadius: "0.5rem",
        border: "2px solid white",
        padding: "0.5rem 1rem",
        
       }}
       >
        <button
          style={{
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            cursor: "pointer"
          }}
        >
        </button>
          Nova Postagem
         </div>
            
        
       </div>
 
         {/* Imagem da página home */}
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
        >
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem da página Home"
              style={{
                width: "66%"
                
              }}
            />
        </div>
 
        </div>
 
      </div>
 
    </div>
  )
}
 
export default Home