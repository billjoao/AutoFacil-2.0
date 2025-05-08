import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card"

export function AutoRastreamento() {
    return (
        <div className="p-6 space-y-6 w-2xl">
            <h1 className="text-2xl font-bold text-red-950 mb-4">Rastreamento de Pedido</h1>

            <Card className="bg-gray-100 shadow-md">
                <CardHeader>
                    <CardTitle>Localização atual do produto</CardTitle>
                    <CardDescription>Última atualização: há 3 horas</CardDescription>
                </CardHeader>
                <CardContent>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3656.6154509091384!2d-46.65839088497762!3d-23.5830938681527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1619455999053!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="300"
                        loading="lazy"
                        className="rounded-md"
                    />
                </CardContent>
            </Card>

            <Card className="bg-gray-100 shadow-md">
                <CardHeader>
                    <CardTitle>Progresso da Entrega</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-green-600" />
                        <p className="text-sm font-medium">Pedido Recebido</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-yellow-400" />
                        <p className="text-sm font-medium">Em Transporte</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-gray-400" />
                        <p className="text-sm font-medium">Entregue</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
