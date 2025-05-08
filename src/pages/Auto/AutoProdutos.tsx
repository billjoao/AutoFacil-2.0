import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  
  export function AutoProdutos() {
    const produtos = [
      {
        id: "1",
        nome: "carburador",
        imagem: "/carburador.jpg",
        descricao: "garantindo desempenho e economia.",
        preco: 299.90,
      },
      {
        id: "2",
        nome: "Disco freio",
        imagem: "/discofreio.jpg",
        descricao: "Componente essencial do sistema de frenagem",
        preco: 459.00,
      },
      {
        id: "3",
        nome: "Escapamento",
        imagem: "/escapamento.jpg",
        descricao: "reduzindo ruído e ajudando no controle de emissões poluentes.",
        preco: 79.99,
      },
      {
        id: "4",
        nome: "Pastilha de Freio Dianteira",
        imagem: "/velaigni.jpg",
        descricao: "Emite a centelha que inicia a combustão no motor",
        preco: 129.50,
      },
    ]
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-950 mb-4">Produtos disponíveis</h1>
  
        <div className="flex gap-6 flex-wrap">
          {produtos.map((produto) => (
            <Card key={produto.id} className="w-[280px] bg-gray-100 shadow-md">
              <CardHeader>
                <CardTitle>{produto.nome}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-36 object-cover rounded-md mb-3"
                  />
                  <CardDescription>{produto.descricao}</CardDescription>
                <p className="text-right font-semibold text-red-800">
                  R$ {produto.preco.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-red-950">Comprar</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    )
  }
  