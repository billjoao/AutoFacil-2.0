import { Link } from "react-router-dom"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export function AutoHome() {
  const cards = [
    {
      title: "Painel de Compras",
      description: "Visualize suas compras e dados financeiros.",
      to: "/auto/dashboard",
    },
    {
      title: "Produtos",
      description: "Explore as peças automotivas disponíveis.",
      to: "/auto/produtos",
    },
    {
      title: "Rastreamento",
      description: "Acompanhe onde está seu pedido.",
      to: "/auto/rastramento",
    },
  ]

  const notificacoes = [
    "Novo pedido confirmado.",
    "Peça 'Filtro de Ar' entregue.",
    "Atualização no status do rastreamento.",
  ]

  return (
    <div className="p-6 space-y-6 w-2xl">
      <h1 className="text-2xl font-bold text-red-950">Bem-vindo à sua área</h1>

      <div className="flex gap-6">
        {cards.map((card, index) => (
          <Link to={card.to} key={index} className="w-1/3">
            <Card className="bg-gray-100 shadow-md hover:scale-[1.02] transition-transform cursor-pointer h-full">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="bg-gray-100 shadow-md">
        <CardHeader>
          <CardTitle>Notificações</CardTitle>
          <CardDescription>Atualizações recentes</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-700">
            {notificacoes.map((msg, i) => (
              <li key={i} className="border-b pb-1 last:border-b-0">{msg}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
